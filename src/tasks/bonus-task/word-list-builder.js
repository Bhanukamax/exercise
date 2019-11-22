class WordListBuilder {
  constructor({ wordProvider }) {
    this.wordProvider = wordProvider;
    this.list = [];
  }

  async buildList(count) {
    const promiseList = [];
    const wordList = [];

    for (let i = 1; i <= count; i++) {
      promiseList.push(
        new Promise(async resolve => {
          const word = await this.wordProvider(i).catch(
            () => "It shouldn't break anything!"
          );
          wordList.push({ word, index: i });
          resolve();
        })
      );
    }

    await Promise.all(promiseList);

    this.list = wordList
      .sort((a, b) => (a.index > b.index ? 1 : -1))
      .map(item => `${item.index}: ${item.word}`);
  }

  getList() {
    return this.list;
  }
}

module.exports = {
  WordListBuilder,
};
