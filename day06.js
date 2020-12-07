
function numQs (input) {
	let fullResults = [];

	// groups
	for (let i = 0; i< input.length; i++) {
		let groupResults = [];
		console.log(input[i]);
		// answers
		for (let j = 0; j < input[i].length; j++) {
			// convert answers to arrays
			let ltrs = input[i][j].split("");
			// loop through each answer (especially for multi-ltr answer)
			for (let k = 0; k < ltrs.length; k++) {
				// if the ltr exists in the results[i] do nothing, push to results[i];
				!groupResults.includes(ltrs[k]) ?
					groupResults.push(ltrs[k]):
					"null";
			}
		}
		console.log("Group Results: " + groupResults);
		fullResults.push(groupResults.length);
	}
	console.log("Ful Results:  (" + fullResults.length + ")  " + fullResults);
	console.log(fullResults.reduce((a, b) => (a + b)));
}

function allYesQs (input) {
	let fullResults = [];

	// groups
	for (let i = 0; i< input.length; i++) {
		let groupResults = [];
		console.log(input[i]);
		// answers
		for (let j = 0; j < input[i].length; j++) {
			// convert answers to arrays
			let ltrs = input[i][j].split("");
			// loop through each answer (especially for multi-ltr answer)
			for (let k = 0; k < ltrs.length; k++) {
				// only collect a ltr that EVERYONE has
			}
		}
		console.log("Group Results: " + groupResults);
		fullResults.push(groupResults.length);
	}
	console.log("Ful Results:  (" + fullResults.length + ")  " + fullResults);
	console.log(fullResults.reduce((a, b) => (a + b)));
}

// numQs();
