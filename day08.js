function accumulatorCk(data) {

	// create an array of visited lines to keep track of where we have been
	let lines = [];

	// Need to start at line 1 = data[0]
	let currentIndex = 0;
	let accumulator = 0;

	for(let i = 0; i<data.length; i++) {
		if (lines.includes(currentIndex)) {
			// console.log("This is where it repeats! Line" + currentIndex + ": [" + data[currentIndex] + "]");
			// console.log("Lines: " + lines);
			console.log("Accumulator: " + accumulator);
			return "STOP!";
		} else {
			console.log("Current -> Line:" + currentIndex + ": " + data[currentIndex]);
			lines.push(currentIndex);
			switch(data[currentIndex][0]) {
			case "acc":
				accumulator += data[currentIndex][1];
				// console.log("Accumulator is now: " + accumulator);
				currentIndex++;
				break;
			case "jmp":
				currentIndex += data[currentIndex][1];
				break;
			default:
				currentIndex++;
			}
		}
	}
}

function nopJmpCk(data) {
	// create an array of visited lines to keep track of where we have been
	let lines = [];

	// Need to start at line 1 = data[0]
	let currentIndex = 0;
	let accumulator = 0;

	for(let i = 0; i<data.length; i++) {
		if(currentIndex < data.length){

			if (lines.includes(currentIndex)) {
				console.log("This is where it repeats! Line" + currentIndex + ": [" + data[currentIndex] + "]");

				return "STOP!";
			} else {
				lines.push(currentIndex);
				switch(data[currentIndex][0]) {
				case "acc":
					accumulator += data[currentIndex][1];
					// console.log("Accumulator is now: " + accumulator);
					currentIndex++;
					break;
				case "jmp":
					currentIndex += data[currentIndex][1];
					break;
				case "nop":
					currentIndex++;
					break;
				default:
					null;
				}
			}
		} else {
			console.log("MADE IT TO THE END! Final Accumulator: " + accumulator);
			return "Made it to the END!";
		}
	}
}

// Need these variables to be global so they can be accessed in multiple function;

function nopLoop(data) {

	// find the data lines with "jmp";
	let nopLines = [];
	for (let n = 0; n < data.length; n++) {
		if(data[n][0] === "nop"){
			nopLines.push(n);
		}
	}
	console.log(nopLines);
	// loop through the lines that have "nop", change to "jmp", rerun nopJmpCk and check if they make it to the end
	for (let i = 0; i < nopLines.length; i++) {
		console.log("- - - - - - - - - - - - - - - - - -");
		let dataNew = [...data];

		let x = nopLines[i];
		let y = nopLines[i - 1]; // previous iteration

		console.log("Line " + x + " (old): " + dataNew[x]);
		dataNew[x][0] = "jmp";
		console.log("Line " + x + " (NEW): " + dataNew[x]);
		if (i>0){
			dataNew[y][0] = "nop"; // reset previous iteration back to original
		}

		nopJmpCk(dataNew);
		dataNew = []; // emptying the array
	}
}

function jmpLoop(data) {
	// find the data lines with "jmp";
	let jmpLines = [];
	for (let j = 0; j < data.length; j++) {"";
		if(data[j][0] === "jmp"){
			jmpLines.push(j);
		}
	}
	console.log(jmpLines);
	// loop through the lines that have "jmp", change to "nop", rerun nopJmpCk and check if they make it to the end
	for (let i = 0; i < jmpLines.length; i++) {
		console.log("- - - - - - - - - - - - - - - - - -");
		let dataNew = [...data];

		let x = jmpLines[i];
		let y = jmpLines[i - 1]; // previous iteration

		console.log("Line " + x + " (old): " + dataNew[x]);
		dataNew[x][0] = "nop";
		console.log("Line " + x + " (NEW): " + dataNew[x]);
		if (i>0){
			dataNew[y][0] = "jmp"; // reset previous iteration back to original
		}

		nopJmpCk(dataNew);
		dataNew = []; // emptying the array
	}
	// }
}