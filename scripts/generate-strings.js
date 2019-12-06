const { readFileSync, writeFileSync } = require('fs');
const { basename, resolve } = require('path');
const glob = require('glob');

const languageFilenames = glob.sync('./lang/*.json');

// build a structure like
// {
//   "en": {
//     "id": "string"
//   },
//   "fr": {
//     "id": "string"
//   },
//   ...
// }
let data = {};
for (let filename of languageFilenames) {
  let locale = basename(filename, '.json');
  let file = readFileSync(filename, 'utf8');
  let strings = JSON.parse(file);
  data[locale] = strings;
}

let fileContents = `export default ${JSON.stringify(data)};`;

writeFileSync('./lang/strings.js', fileContents);
console.log(`> Wrote strings to: "${resolve('./lang/strings.js')}"`);
