const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');
const theme = require('./theme.json');

const content = fs.readFileSync(
  path.resolve(__dirname, '../content/index.css'),
  { encoding: 'utf8' }
);

console.log(nunjucks.renderString(content, { theme: theme }));
