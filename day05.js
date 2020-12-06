function whichSeat(input) {
// ROWS
	let totalRows = 127;
	let allRows = [];
	// create a numeric array of seat rows
	for (let i = 0; i <= totalRows; i++) {
		allRows[i] = i;
	}

	//COLUMNS
	let totalCols = 7;
	let allCols = [];
	for (let j = 0; j <= totalCols; j++) {
		allCols[j] = j;
	}

	// Boarding pass array
	let passArr = undefined;

	// seatID array
	let seatId = [];

	// loop through the boarding passes
	for (let k = 0; k< input.length; k++){

		//change boardingPass string to array
		passArr = input[k].split("");
		console.log(passArr);

		// set up new set of rows
		let startRows = allRows;
		// set up new set of cols
		let startCols = allCols;
		//loop through each boarding pass for the 0-6 letters to split
		for (let m = 0; m <= 10; m++) {
			switch(m) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
				if (passArr[m] === "F") {
					// if the letter is F, split Rows array to keep the lower half
					let firstHalf = [];
					firstHalf = startRows.slice(0, (startRows.length/2));
					startRows = firstHalf; // reset Rows
					// console.log(passArr[m] + " -> " + startRows);
				} else if (passArr[m] === "B") {
					let secondHalf = [];
					secondHalf = startRows.slice((startRows.length/2), (startRows.length));
					startRows = secondHalf; // reset Rows
					// console.log(passArr[m] + " -> " + startRows);
				}
				break;
			case 7:
			case 8:
			case 9:
				if (passArr[m] === "L") {
					// if the letter is L, split Cols array to keep the lower half
					let firstHalf = [];
					firstHalf = startCols.slice(0, (startCols.length/2));
					startCols = firstHalf; // reset Cols
					// console.log(passArr[m] + " -> " + startRows + " & " + startCols);
				} else if (passArr[m] === "R") {
					let secondHalf = [];
					secondHalf = startCols.slice((startCols.length/2), (startCols.length));
					startCols = secondHalf; // reset Cols
					// console.log(passArr[m] + " -> " + startRows + " & " + startCols);
				}
				break;
			case 10:
				// calculating seatID
				console.log(startRows + " & " + startCols);
				console.log((parseInt(startRows,10) * 8) + parseInt(startCols, 10));
				seatId.push((parseInt(startRows,10) * 8) + parseInt(startCols, 10));
				break;
			}
		}
	}
	console.log(seatId);
	// return the highest seatId
	console.log(Math.max.apply(null, seatId));
	let seatsSorted = seatId.sort((a, b) => a - b);
	console.log(seatsSorted);
	for (let p = 0; p< seatsSorted.length; p++) {
		if(seatsSorted[p] != (seatsSorted[p-1] + 1)) {
			console.log(seatsSorted[p] -1);
		}
	}
	console.log(seatsSorted.includes(609)); // double check
	console.log(seatsSorted.includes(610)); // double check
	console.log(seatsSorted.includes(611)); // double check

}
