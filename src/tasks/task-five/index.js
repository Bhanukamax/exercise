const { writeListToFile } = require('../../modules/write-list-to-file');

const { getList: getTaskOneList } = require('../task-one/get-list');
const { getList: getTaskTwoList } = require('../task-two/get-list');
const {
  getList: getTaskThreeListTwo,
} = require('../task-three/fizz-buzz/get-list');
const {
  getList: getTaskThreeListOne,
} = require('../task-three/random/get-list');

async function taskFive() {
  console.log('task five');

  const taskThreeRandomList = await getTaskThreeListOne();
  const taskThreeFizzBuzzList = await getTaskThreeListTwo();

  writeListToFile(
    [
      ...getTaskOneList(),
      ...getTaskTwoList(),
      ...taskThreeRandomList,
      ...taskThreeFizzBuzzList,
    ],
    'list.txt'
  );
}

module.exports = {
  taskFive,
};
