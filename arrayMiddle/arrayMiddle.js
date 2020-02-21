// Array Middle
// Given an array of negative/positive integers,
// return the element in the center position of the array.

// If the array has an even number of elements,
// return the average of the two middle elements instead.
function middle(numbers) {
  //declare variables for result and index.
  let result = 0;
  let index;
  //checking the middle of the array depends if the length is an odd number.
  if (numbers.length % 2 === 1) {
    //Math.floor to make sure that we get the right index as arrays starts from 0.
    index = Math.floor(numbers.length / 2);
    return numbers[index];
  } else {
    index = numbers.length / 2
    //taking the two elements in the middle when the length of the array is an even number.
    result = (numbers[index] + numbers[index - 1]) / 2
    return result;
  }
}
