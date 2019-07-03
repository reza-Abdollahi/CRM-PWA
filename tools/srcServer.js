import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import proxy from 'http-proxy-middleware';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  '/api2',
  proxy({ target: 'https://ispbeta.sepanta.com', changeOrigin: true })
);

app.use(require('webpack-dev-middleware')(compiler, {
  stats: "errors-warnings",
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
