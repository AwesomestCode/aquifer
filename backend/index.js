const xml2js = require('xml2js');

let parser = new xml2js.Parser();

fetch('https://news.ycombinator.com/rss')
  .then(r => r.text())
  .then(text => parser.parseString(text, (err, result) => {
    global.debug = result;
    console.log(result)
  }));