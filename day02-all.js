
function pwCounts (input) {
	let count = 0;
	for (let i = 0; i < input.length; i++) {
  	// convert array into usable pieces
		let ltr = input[i][1];
		let num = input[i][0].split("-"); //  convert into two numbers
		let minNum = parseInt(num[0], 10); // convert string to num
		let maxNum =  parseInt(num[1], 10); // convert string to num
		let pw = input[i][2];
		let re = new RegExp(ltr, "g");

		if (re.test(pw)) {
			if (pw.match(re).length >= minNum) {
				if(pw.match(re).length <= maxNum) {
					count++;
				}
			}
		}
	}
	return ("Valid count: " + count);
}

function pwLocals (input) {
	let count = 0;
	for (let i = 0; i < input.length; i++) {
  	// convert array into usable pieces
		let ltr = input[i][1];
		let num = input[i][0].split("-"); //  convert into two numbers
		let minIndex = parseInt(num[0], 10); // convert string to num
		let maxIndex =  parseInt(num[1], 10); // convert string to num
		let pw = input[i][2];

		if (pw.includes(ltr)) {
			let pwArr = pw.split("");
			if((pwArr[minIndex-1] === ltr) && !(pwArr[maxIndex-1] === ltr)) {
				count++;
			} else if (!(pwArr[minIndex-1] === ltr) && (pwArr[maxIndex-1] === ltr)) {
				count++;
			}
		}
	}
	return ("Valid count: " + count);
}

// pwCounts(data); // Correct answer 660
// pwLocals(data); // Correct answer 530
