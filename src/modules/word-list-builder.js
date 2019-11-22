class WordListBuilder {
  constructor({ wordProvider }) {
    this.wordProvider = wordProvider;
    this.list = [];
  }

  buildListSync(count) {
    for (let i = 1; i <= count; i++) {
      let word;
      try {
        word = this.wordProvider(i);
      } catch (e) {
        word = "It shouldn't break anything!";
      }
      this.list.push(`${i}: ${word}`);
    }
  }

  async buildList(count) {
    for (let i = 1; i <= count; i++) {
      let word;
      try {
        word = await this.wordProvider(i);
      } catch (e) {
        word = "It shouldn't break anything!";
      }

      this.list.push(`${i}: ${word}`);
    }
  }

  getList() {
    return this.list;
  }
}

module.exports = {
  WordListBuilder,
};
