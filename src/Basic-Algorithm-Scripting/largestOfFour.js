/**
 * https://www.freecodecamp.org/challenges/return-largest-numbers-in-arrays
 * Return an array consisting of the largest number from each provided
 * sub-array. For simplicity, the provided array will contain exactly 4
 * sub-arrays.
 */

function largestOfFour(arr) {
  // You can do this!
  return arr.map(function(numArr) { return Math.max.apply(null, numArr); });
}

export { largestOfFour };
