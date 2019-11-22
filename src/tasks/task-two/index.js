const { listPrinter } = require('../../modules/list-printer');
const { getList } = require('./get-list');

function taskTwo() {
  listPrinter(getList());
}

module.exports = {
  taskTwo,
};
