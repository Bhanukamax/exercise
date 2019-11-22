const { listPrinter } = require('../../../modules/list-printer');
const { getList } = require('./get-list');

async function fizzBuzz() {
  const fizzBuzzWordList = await getList();
  listPrinter(fizzBuzzWordList);
}

module.exports = {
  fizzBuzz,
};
