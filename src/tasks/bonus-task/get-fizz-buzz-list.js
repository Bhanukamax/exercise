const { getRandomWord } = require('word-maker');
const { WordListBuilder } = require('./word-list-builder');
const { FizzBuzzFactory } = require('../../modules/fizz-buzz-factory');

async function getFizzBuzzList() {
  const fizzBuzzFactory = new FizzBuzzFactory({
    randomWordGenerator: () => getRandomWord({ withErrors: true, slow: true }),
  });

  const wordListBuilder = new WordListBuilder({
    wordProvider: fizzBuzzFactory.getFizzBuzzGenerator(),
  });

  await wordListBuilder.buildList(100);

  return wordListBuilder.getList();
}

module.exports = {
  getFizzBuzzList,
};
