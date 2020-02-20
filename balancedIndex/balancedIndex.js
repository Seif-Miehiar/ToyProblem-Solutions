// Balanced Index
// This function should take a list of numbers as an input and return the first balanced index of that list.
// A balanced index is defined as any index in the list where all values in the list prior to that index sum to the same value as all values following.
// Neither sum should include the current index. Please return 'null' in the absence of any solution.

function BalancedIndex(array) {
  //Type your code here

  // -------------- FIRST SOLUTION O(n) --------------
  //Declare variables.
  let rightSum = 0;
  let leftSum = 0;
  // //loop over the array.

  for (let i = 0; i < array.length; i++) {
    rightSum += array[i]
  }
  // //loop over the array.
  for (let i = 0; i < array.length; i++) {
    //incrementing leftSum variable if condition is true.
    if (i > 0) {
      leftSum += array[i - 1];
    }
    //incrementing rightSum variable. 
    rightSum -= array[i];

    //check if two sums are equal.
    if (leftSum === rightSum) {
      return i;
    }
  }
  return null;

}
//---------------- SECOND SOLUTION WITH O(n^2) -----------------
    // //Declare variables
    // let leftSum = 0;
    // let rightSum;
    // //loop over the array 
    // for( let i = 0; i < array.length; i++) {
    //   //assigning rightSum var to be zero each time i changes.
    //   rightSum = 0;
    //   //checking if array[i-1] is defined to increment leftSum variable.
    //   if( array[i-1] !== undefined ) {
    //     leftSum += array[i-1];
    //   }
    //   //A nested loop to increment rightSum variable
    //   for( let j = i + 1; j < array.length; j++ ){
    //     rightSum += array[j];
    //   }
    //   //check if two sums are equal.
    //   if( leftSum === rightSum ) {
    //     //returning the balanced index.
    //     return i;
    //   }
    // }
    // //return null when no solution is returned.
    // return null;
    //---------------------------------------------------------------------------------------

