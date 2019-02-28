'use strict';
// Daily Programmer Challenge 375 Easy with bonus Node.js script solution
/**
 * Description
 * A number is input in computer then a new no should get printed by adding one to each
 * of its digit. If you encounter a 9, insert a 10 (don't carry over, just shift things around).
 * For example, 998 becomes 10109.
 * Bonus
 * This challenge is trivial to do if you map it to a string to iterate over the input, operate,
 * and then cast it back. Instead, try doing it without casting it as a string at any point,
 * keep it numeric (int, float if you need it) only.
 * https://www.reddit.com/r/dailyprogrammer/comments/aphavc/20190211_challenge_375_easy_print_a_new_number_by/
 */
let input = Number(process.argv[2]);
let individualDigits = [];
while (input > 0) {
  individualDigits[individualDigits.length] = (input % 10) + 1;
  input = Math.floor(input / 10);
}
individualDigits.reverse();
console.log(individualDigits.join(''));
