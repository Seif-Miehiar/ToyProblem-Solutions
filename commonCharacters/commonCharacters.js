// Common Characters
// Write a function that accepts two strings as arguments, 
//and returns only the characters that are common to both strings.
// Your function should return the common characters in the same order that they appear in the first argument.
// Do not return duplicate characters and ignore whitespace in your returned string.

// Example: commonCharacters('acexivou', 'aegihobu')

// Returns: 'aeiou'
commonCharacters = function (string1, string2) {

  let res = '';
  let stringOne = string1.split('');
  let stringTwo = string2.split('');

  for (let i = 0; i < stringOne.length; i++) {
    for (let j = 0; j < stringTwo.length; j++) {
      if (stringOne[i] === stringTwo[j]) {
        res += stringTwo[j];
        break;
      }
    }
  }
  return res;

}
