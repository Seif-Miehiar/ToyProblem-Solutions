// Even Occurrence
// Find the first item that occurs an even number of times in an array.
// Remember to handle multiple even-occurrence items and return the first one. 
//Return null if there are no even-occurrence items.

function evenOccurrence(arr) {
  let storage = {};

  for (let i = 0; i < arr.length; i++) {
    if (storage[arr[i]] === undefined) {
      storage[arr[i]] = 1;
    } else {
      storage[arr[i]]++;
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (storage[arr[j]] % 2 === 0) return arr[j]
  }
  return null;
}