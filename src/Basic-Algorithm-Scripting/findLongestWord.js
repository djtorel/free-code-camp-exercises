/**
 * https://www.freecodecamp.org/challenges/find-the-longest-word-in-a-string
 * Return the length of the longest word in the provided sentence.
 * 
 */

function findLongestWord(str) {
  let strArray = str.split(' ');
  let longestWord = '';
  strArray.map(function(word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord.length;
}

export { findLongestWord };