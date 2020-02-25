// Even Occurrence
// Find the first item that occurs an even number of times in an array.
// Remember to handle multiple even-occurrence items and return the first one. 
//Return null if there are no even-occurrence items.

function evenOccurrence(arr) {
  //create an empty object to store elements of the array
  let storage = {};

  //loop over the array.
  for (let i = 0; i < arr.length; i++) {
    //check if the element is a key in our storage.
    if (storage[arr[i]] === undefined) {
      //if not assign the key and give it the value of 1.
      storage[arr[i]] = 1;
    } else {
      //if it's defined, increment the value of the key by 1.
      storage[arr[i]]++;
    }
  }
  //loop over the arr again.
  for (let j = 0; j < arr.length; j++) {
    //check if the element from the array in the storage has the value of an even number.
    // if yes return the key from the array.
    if (storage[arr[j]] % 2 === 0) return arr[j]
  }
  //if no return statment was excuted, return null.
  return null;
}