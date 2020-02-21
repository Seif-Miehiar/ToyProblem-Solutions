// firstNonRepeatedCharacter
// Given an arbitrary input string, return the first non-repeating character. 
//For strings with all repeats, return 'sorry'
function firstNonRepeatedCharacter(string) {
	//declare an empty object variable
	let storage = {};

	//splitting the string inot an array each character will be an value in one index
	let array = string.split('');

	//for loop over the array of strings
	for (let i = 0; i < array.length; i++) {
		//checking if the object has the value as an key/prop
		if (storage[array[i]] === undefined) {
			//if not assign it with a value of 1
			storage[array[i]] = 1
		} else {
			//if not just increment that value
			storage[array[i]]++
		}
	}
	//loop over the object 
	for (let key in storage) {
		//checking if a value of the key/prop equals 1
		if (storage[key] === 1) {
			return key;
		}
	}
	//if no return statment were excuted return "sorry"
	return 'sorry'
}