// Only Unique
// Given a string, remove any characters that are not unique from the string.
function onlyUnique(str) {
  let storage = {};
  let string = '';

  for (let i = 0; i < str.length; i++) {
    if (storage[str[i]] === undefined) {
      storage[str[i]] = 1;
    } else {
      storage[str[i]]++;
    }
  }
  for (let key in storage) {
    if (storage[key] === 1) {
      string += key;
    }
  }
  return string;
}
