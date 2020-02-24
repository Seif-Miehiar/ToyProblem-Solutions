// Balanced Parenthesis
// Given a string, return true if it contains balanced parenthesis ().

function isBalanced(string) {
  //declare a counter variable with a value of 0.
  let counter = 0;

  //looping over the string.
  for (let char of string) {
    //first check if the counter is less than 0 means that the parenthesis started with closed one which means it's not balanced.
    if (counter < 0) return false;
    //check if the character is open parenthesis increment the counter by one;
    if (char === '(') counter++;
    //check if the character is closed parenthesis decrement the counter by one;
    if (char === ')') counter--;
  }
  //turnary statment checks if the counter is equal to 0 return true else return false.
  return counter === 0 ? true : false;
}
