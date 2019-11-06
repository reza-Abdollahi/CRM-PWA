// This script copies src/index.html into /dist/index.html
import fs from 'fs';
// eslint-disable-next-line import/no-extraneous-dependencies
import cheerio from 'cheerio';
// eslint-disable-next-line import/no-extraneous-dependencies
import colors from 'colors';

/* eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    console.log(err);
    return;
  }

  const $ = cheerio.load(markup);

  //  since a separate spreadsheet is only utilized for the production build,
  //  need to dynamically add this here.
  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log('index.html written to /dist'.green);
  });
});
