/**
 * Reddit.com/r/dailyprogrammer
 * [2018-06-18] Challenge #364 [Easy] Create a Dice Roller
 * https://www.reddit.com/r/dailyprogrammer/comments/8s0cy1/20180618_challenge_364_easy_create_a_dice_roller/
 */
const inputArray = ['5d12', '6d4', '1d2', '1d8', '3d6', '4d20', '100d100'].map(input => {
  return input.split('d');
});

const rollDice = dice => sides => {
  let count = 0;
  let individualRoles = [];
  for (i = 0; i < dice; i++) {
    let roll = getRandomNumber(sides);
    count += roll;
    individualRoles.push(roll);
  }
  return { count, individualRoles };
};

const getRandomNumber = max => {
  return Math.ceil(Math.random() * Math.floor(max));
};

inputArray.forEach(input => {
  let { count, individualRoles } = rollDice(input[0])(input[1]);
  console.log(`${count}: ${individualRoles}`);
});

/**
 * Output
 */
/*
19: 7,1,1,9,1
14: 3,1,2,4,1,3
1: 1
2: 2
10: 5,3,2
58: 8,12,18,20
5200: 1,68,43,46,17,38,19,90,82,1,97,30,1,79,94,13,71,93,76,63,69,23,57,24,55,54,55,50,91,94,69,92,100,53,37,14,96,28,13,93,5,89,92,1,42,28,96,99,97,89,36,71,37,27,72,75,57,1,86,57,48,74,59,86,52,73,36,44,72,5,56,14,27,28,91,75,43,4,73,38,18,15,26,14,79,9,5,2,80,28,94,72,12,39,98,42,2,85,39,97
*/
