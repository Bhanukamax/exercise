const { getRandomWord } = require('word-maker');
const { WordListBuilder } = require('../../../modules/word-list-builder');

async function getList() {
  const wordListBuilder = new WordListBuilder({
    wordProvider: () => getRandomWord({ withErrors: true }),
  });

  await wordListBuilder.buildList(100);

  return wordListBuilder.getList();
}

module.exports = {
  getList,
};
