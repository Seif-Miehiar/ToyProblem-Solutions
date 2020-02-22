// Is Subset Of
// Make an array method that can return whether or
// not a context array is a subset of an input array.
// To simplify the problem,
// you can assume that both arrays will contain only strings.

Array.prototype.isSubsetOf = function (array) {
  //looping over this key word which refers back to the array.
  for (var i = 0; i < this.length; i++) {
    //checking if it includes in the argument array
    if (!array.includes(this[i])) {
      //if yes return false
      return false;
    }
  }
  //if the function did not excute on the if condition return true.
  return true;
};

