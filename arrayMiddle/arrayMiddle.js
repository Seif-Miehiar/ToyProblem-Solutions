// Array Middle
// Given an array of negative/positive integers,
// return the element in the center position of the array.

// If the array has an even number of elements,
// return the average of the two middle elements instead.
function middle(numbers) {
  let result = 0;
  let index;
  if (numbers.length % 2 === 1) {
    index = Math.floor(numbers.length / 2);
    return numbers[index];
  } else {
    result = numbers[]
    return result;
  }
}
