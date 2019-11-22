const { getRandomWordSync } = require('word-maker');
const { WordListBuilder } = require('../../modules/word-list-builder');
const { SyncFizzBuzzFactory } = require('../../modules/sync-fizz-buzz-factory');

function getList() {
  const fizzBuzzFactory = new SyncFizzBuzzFactory({
    randomWordGenerator: () => getRandomWordSync({ withErrors: true }),
  });

  const wordListBuilder = new WordListBuilder({
    wordProvider: fizzBuzzFactory.getFizzBuzzGenerator(),
  });

  wordListBuilder.buildListSync(100);

  return wordListBuilder.getList();
}

module.exports = {
  getList,
};
