'use strict';
// Daily Programmer challenge 375 Intermediate Node.js solution.
/**
 * [2019-02-13] Challenge #375 [Intermediate] A Card Flipping Game
 * https://www.reddit.com/r/dailyprogrammer/comments/aq6gfy/20190213_challenge_375_intermediate_a_card/
 */
let inputs = process.argv.slice(2);
let individualInputArrays = inputs.map(el => {
  return el.split('');
});
const testWinCondition = inputArray => {
  return inputArray.every(el => {
    if (el == '.') {
      return true;
    }
    return false;
  });
};

const flipPrevious = (inputArray, index) => {
  switch (inputArray[index - 1]) {
    case '0':
      inputArray[index - 1] = '1';
      break;
    case '1':
      inputArray[index - 1] = '0';
      break;
  }
};

const flipNext = (inputArray, index) => {
  switch (inputArray[index + 1]) {
    case '0':
      inputArray[index + 1] = '1';
      break;
    case '1':
      inputArray[index + 1] = '0';
      break;
  }
};

const flipCards = (inputArray, index) => {
  // If its the first element in the array
  if (index == '0') {
    flipNext(inputArray, index);
    return;
  }
  // If its the last element in the array
  if (inputArray.length - 1 == index) {
    flipPrevious(inputArray, index);
    return;
  }
  // If both neighbors are already removed
  if (inputArray[index - 1] == '.' && inputArray[index + 1] == '.') {
    return;
  }
  // Flip those cards
  flipPrevious(inputArray, index);
  flipNext(inputArray, index);
};

const gameLoop = inputArray => {
  // Step 1 Check Array for 1
  let indexToRemove = inputArray.findIndex(el => el === '1');
  if (indexToRemove > -1) {
    // Step 2 Remove 1
    inputArray[indexToRemove] = '.';
    // Step 3 Flip Cards
    flipCards(inputArray, indexToRemove);
    return indexToRemove;
  }
};

individualInputArrays.forEach(el => {
  let gameOver = false;
  let moves = [];
  while (gameOver == false) {
    moves.push(gameLoop(el));
    // Step 4 Check the win condition
    if (testWinCondition(el)) {
      console.log(`You Win! ${moves}`);
      gameOver = true;
    }
    if (el.indexOf('1') === -1 && el.indexOf('0') > -1) {
      console.log('Unwinnable');
      gameOver = true;
    }
  }
});
