// Only Unique
// Given a string, remove any characters that are not unique from the string.
function onlyUnique(str) {
  //declare an empty object and empty string.
  let storage = {};
  let string = '';

  //loop over argument to add each element/value as a key in our storage.
  for (let i = 0; i < str.length; i++) {
    //if the key is undefined.
    if (storage[str[i]] === undefined) {
      //assign it as a new key and give it the value of one.
      storage[str[i]] = 1;
    } else {
      //if not increment the value by 1. This means that the key is already in our storage.
      storage[str[i]]++;
    }
  }
  //loop over the object.
  for (let key in storage) {
    //checking every element if the value equals one means that it's unique.
    if (storage[key] === 1) {
      //if yes add the key to the string variable.
      string += key;
    }
  }
  //return the only unique string.
  return string;
}
