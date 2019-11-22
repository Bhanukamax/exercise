const { taskOne } = require('./tasks/task-one');
const { taskTwo } = require('./tasks/task-two');
const { taskThree } = require('./tasks/task-three');
const { taskFive } = require('./tasks/task-five');
const { bonusRandomWords, bonusFizzBuzzWords } = require('./tasks/bonus-task');

console.log('It works!');

// YOUR CODE HERE

async function runTasks() {
  taskOne();

  taskTwo();

  await taskThree();

  await taskFive();

  /*
   * Bonus Tasks
   */

  // Slow mode random words runs in around 620 milliseconds, when run alone
  await bonusRandomWords();

  // Slow mode fizz buzz words runs in around 610 milliseconds, when run alone
  bonusFizzBuzzWords();
}

runTasks();
