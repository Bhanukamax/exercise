const { listPrinter } = require('../../modules/list-printer');
const { getRandomList } = require('./get-random-list');
const { getFizzBuzzList } = require('./get-fizz-buzz-list');

async function bonusRandomWords() {
  const randomWordList = await getRandomList();

  listPrinter(randomWordList);
}

async function bonusFizzBuzzWords() {
  const fizzBuzzWordList = await getFizzBuzzList();

  listPrinter(fizzBuzzWordList);
}

module.exports = {
  bonusRandomWords,
  bonusFizzBuzzWords,
};
