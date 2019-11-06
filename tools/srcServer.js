/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import proxy from 'http-proxy-middleware';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  '/api2',
  proxy({ target: 'https://ispbeta.sepanta.com', changeOrigin: true }),
);

app.use(require('webpack-dev-middleware')(compiler, {
  stats: "errors-warnings",
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
