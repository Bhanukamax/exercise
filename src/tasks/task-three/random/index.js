const { listPrinter } = require('../../../modules/list-printer');
const { getList } = require('./get-list');

async function random() {
  const randomWordList = await getList();

  listPrinter(randomWordList);
}

module.exports = {
  random,
};
