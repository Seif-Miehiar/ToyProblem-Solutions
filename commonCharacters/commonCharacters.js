// Common Characters
// Write a function that accepts two strings as arguments, 
//and returns only the characters that are common to both strings.
// Your function should return the common characters in the same order that they appear in the first argument.
// Do not return duplicate characters and ignore whitespace in your returned string.

// Example: commonCharacters('acexivou', 'aegihobu')

// Returns: 'aeiou'
commonCharacters = function (string1, string2) {
  //declare an empty string to save the common characters
  let result = '';

  //splitting the argument into array
  let stringOne = string1.split('');
  let stringTwo = string2.split('');

  //looping over first array.
  for (let i = 0; i < stringOne.length; i++) {

    //looping over second array.
    for (let j = 0; j < stringTwo.length; j++) {

      //checking if each element from array one if it is included in array 2.
      if (stringOne[i] === stringTwo[j]) {

        //adding the string with plus ooperator.
        result += stringTwo[j];

        //if yes then there is a common character and break to continue the loop over the other element.
        break;
      }
    }
  }
  //returning the result variable of the common characters
  return result;
}
