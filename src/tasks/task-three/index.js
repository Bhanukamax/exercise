const { random } = require('./random');
const { fizzBuzz } = require('./fizz-buzz');

async function taskThree() {
  await random();

  fizzBuzz();
}

module.exports = {
  taskThree,
};
