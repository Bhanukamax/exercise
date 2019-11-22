class FizzBuzzFactory {
  constructor({ randomWordGenerator }) {
    this.getRandomWord = randomWordGenerator;
  }

  getFizzBuzzGenerator() {
    return async number => {
      const isFizz = number % 3 === 0;
      const isBuzz = number % 5 === 0;

      if (isFizz && isBuzz) return 'FizzBuzz';

      if (isFizz) return 'Fizz';

      if (isBuzz) return 'Buzz';

      return this.getRandomWord();
    };
  }
}

module.exports = {
  FizzBuzzFactory,
};
