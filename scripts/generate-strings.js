const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');
const glob = require('glob');

const languageFilenames = glob
  .sync('./lang/*.json');
  .map(filename => {
  })

for (let filename of languageFilenames) {
  let locale = basename(filename);
  let file = readFileSync(filename, 'utf8');
  let strings = JSON.parse(file);
}

writeFileSync('./lang/en.json', JSON.stringify(defaultMessages, null, 2));
console.log(`> Wrote default messages to: "${resolve('./lang/en.json')}"`);
