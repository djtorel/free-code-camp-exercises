/**
 * https://www.freecodecamp.org/challenges/title-case-a-sentence
 * Return the provided string with the first letter of each word capitalized.
 * Make sure the rest of the word is in lower case.
 */

function titleCase(str) {
  return str.split(' ').map(function(word) {
    return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

export { titleCase };
