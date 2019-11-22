const { getRandomWord } = require('word-maker');
const { WordListBuilder } = require('../../../modules/word-list-builder');
const {
  SyncFizzBuzzFactory,
} = require('../../../modules/sync-fizz-buzz-factory');

async function getList() {
  const fizzBuzzFactory = new SyncFizzBuzzFactory({
    randomWordGenerator: () => getRandomWord({ withErrors: true }),
  });

  const wordListBuilder = new WordListBuilder({
    wordProvider: fizzBuzzFactory.getFizzBuzzGenerator(),
  });

  await wordListBuilder.buildList(100);

  return wordListBuilder.getList();
}

module.exports = {
  getList,
};
