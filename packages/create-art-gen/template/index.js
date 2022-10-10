const readme = require('./ReadMe.md')
const packagejson = require('./package.json')
const indexhtml = require('./index.html')
const artjs = require('./src/art')
const mainjs = require('./src/main')
const stylecss = require('./src/style.css')

module.exports = {
  filesData: [
    {
      filePath: 'Readme.md',
      content:readme,
    },
    {
      filePath: 'package.json',
      content:packagejson,
    },
    {
      filePath: 'index.html',
      content:indexhtml,
    },
    {
      filePath: 'src/art.js',
      content:artjs,
    },
    {
      filePath: 'src/main.js',
      content:mainjs,
    },
    {
      filePath: 'src/style.css',
      content:stylecss,
    },
  ]
}