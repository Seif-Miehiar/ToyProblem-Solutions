// firstNonRepeatedCharacter
// Given an arbitrary input string, return the first non-repeating character. 
//For strings with all repeats, return 'sorry'
function firstNonRepeatedCharacter(string) {
	//type your code here
	let storage = {};
	let array = string.split(' ');

	for (let i = 0; i < array; i++) {
		if (storage[array[i]] !== undefined) {
			storage[array[i]] = 1
		} else {
			storage[array[i]]++
		}
		for (let key in storage) {
			if (storage[key] === 1) {
				return key;
			}
		}
	}
	return 'sorry'
}