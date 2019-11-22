const { getRandomWordSync } = require('word-maker');
const { WordListBuilder } = require('../../modules/word-list-builder');

function getList() {
  const wordListBuilder = new WordListBuilder({
    wordProvider: () => getRandomWordSync({ withErrors: true }),
  });

  wordListBuilder.buildListSync(100);

  return wordListBuilder.getList();
}

module.exports = {
  getList,
};
