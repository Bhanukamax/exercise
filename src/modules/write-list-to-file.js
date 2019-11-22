const fs = require('fs');
const util = require('util');

async function writeListToFile(list, fileName) {
  const writeFile = util.promisify(fs.writeFile);

  const text = list.reduce((acc, item) => acc + `\n${item}`, '');

  writeFile(fileName, text);
}

module.exports = {
  writeListToFile,
};
