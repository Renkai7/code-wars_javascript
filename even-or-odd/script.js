function evenOrOdd(number) {
	if (typeof number !== "number") {
		return "invalid number";
	}
	return number % 2 === 0 ? "Even" : "Odd";
}
