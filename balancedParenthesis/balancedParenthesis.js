// Balanced Parenthesis
// Given a string, return true if it contains balanced parenthesis ().

function isBalanced(str) {
  //declare a counter variable with a value of 0.
  //for ')'
  let counter = 0;
  //for ']'
  let counter2 = 0;
  //for '}'
  let counter3 = 0

  //looping over the string.
  for (let char of str) {
    //first check if the counter is less than 0 means that the parenthesis started with closed one which means it's not balanced.
    if (counter < 0 || counter2 < 0 || counter3 < 0) return false;
    //check if the character is open parenthesis/square/curly increment the counter by one;
    if (char === '(' && counter2 === 0 && counter3 === 0) counter++;
    if (char === '[' && counter === 0 && counter3 === 0) counter2++;
    if (char === '{' && counter === 0 && counter2 === 0) counter3++;

    //check if the character is closed parenthesis/square/curly decrement the counterthat is related to the type of the bracket by one;
    if (char === ')' && counter2 === 0 && counter3 === 0) counter--;
    if (char === ']' && counter === 0 && counter3 === 0) counter2--;
    if (char === '}' && counter === 0 && counter2 === 0) counter3--;
  }
  //turnary statment checks if the counter is equal to 0 return true else return false.
  return counter === 0 && counter2 === 0 && counter3 === 0
}

