const { listPrinter } = require('../../modules/list-printer');
const { getList } = require('./get-list');

function taskOne() {
  listPrinter(getList());
}

module.exports = {
  taskOne,
};
