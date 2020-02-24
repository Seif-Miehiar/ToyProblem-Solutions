// Bubble Sort

// Bubble sort is considered the most basic sorting algorithm in Computer Science.
// It works by starting at the first element of an array and comparing it
// to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth,
// and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array,
// it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

var bubbleSort = function (array) {
  //looping over the array.
  for (let i = 0; i < array.length; i++) {
    //checking if the first element is greater than the one after.
    if (array[i] > array[i + 1] && array[i] !== array[i + 1]) {
      //if yes we swap the elements
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      //and then decrement i with - 2 to loop back again to a base index to check again so it can move the element to the begining of the array.
      i = i - 2;
    }
  }
  //return the array/argument.
  return array;
}

//-------------------While Loop Answer------------------
  // let i = 0;

  // while (i < array.length) {
  //   if (array[i] > array[i + 1] && array[i] !== array[i + 1]) {
  //     let temp = array[i];
  //     array[i] = array[i + 1];
  //     array[i + 1] = temp;
  //     i = i - 2;
  //   }
  //   i++
  // }
  // return array;

