/**
 * https://www.freecodecamp.org/challenges/factorialize-a-number
 * Return the factorial of the provided integer.
 */

function factorialize(num) {
  var result = 1;
  for(var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

export { factorialize };
