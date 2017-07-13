/**
 * https://www.freecodecamp.org/challenges/check-for-palindromes
 * Return true if the given string is a palindrome. Otherwise, return false.
 *
 * A palindrome is a word or sentence that's spelled the same way both forward
 * and backward, ignoring punctuation, case, and spacing.
 *
 * Note
 * You'll need to remove all non-alphanumeric characters (punctuation, spaces
 * and symbols) and turn everything lower case in order to check for palindromes.
 */

/**
 * My solution
 */
function palindrome(str) {
  // Good luck!
  const filteredStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedStr = filteredStr.split('').reverse().join('');
  return filteredStr === reversedStr;
}

/**
 * Advanced solution
 */
// function palindrome(str) {
//   // Good luck!
//   let front = 0;
//   let back = str.length - 1;

//   while (back > front) {
//     while(str[front].match(/[\W_]/)) {
//       front++;
//       continue;
//     }
//     while(str[back].match(/[\W_]/)) {
//       back--;
//       continue;
//     }
//     if (str[front].toLowerCase() !== str[back].toLowerCase()) {
//       return false;
//     }
//     front++;
//     back--;
//   }

//   return true;
// }

export { palindrome };