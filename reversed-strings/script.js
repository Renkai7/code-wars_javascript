const reverseString = (str) => {
	let reverseWord = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reverseWord += str[i];
	}
	return reverseWord;
};

const newString = reverseString("world");
console.log(newString);
