// Balanced Parenthesis
// Given a string, return true if it contains balanced parenthesis ().

function isBalanced(string) {
  let counter = 0;

  for (let char of string) {
    if (counter < 0) return false;
    if (char === '(') counter++;
    if (char === ')') counter--;
  }
  return counter === 0 ? true : false;
}
