const { getRandomWord } = require('word-maker');
const { WordListBuilder } = require('./word-list-builder');

async function getRandomList() {
  const wordListBuilder = new WordListBuilder({
    wordProvider: () => getRandomWord({ slow: true, withErrors: true }),
  });

  await wordListBuilder.buildList(100);

  return wordListBuilder.getList();
}

module.exports = {
  getRandomList,
};
