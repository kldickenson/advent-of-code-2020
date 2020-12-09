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

// Need these variables to be global so they can be accessed in multiple function;
let nopLines = [];
let jmpLines = [];

function nopJmpCk(data) {
	// create an array of visited lines to keep track of where we have been
	let lines = [];
	// jmpLines = [];
	// nopLines = [];

	// Need to start at line 1 = data[0]
	let currentIndex = 0;
	let accumulator = 0;

	for(let i = 0; i<data.length; i++) {
		if(currentIndex < data.length){

			if (lines.includes(currentIndex)) {
				console.log("This is where it repeats! Line" + currentIndex + ": [" + data[currentIndex] + "]");
				// console.log("Lines: " + lines);
				// console.log("Accumulator: " + accumulator);
				// console.log("JMP:  (" + jmpLines.length + ")  " + jmpLines);
				// console.log("NOP:  (" + nopLines.length + ")  " + nopLines);
				return "STOP!";
			} else {
				// console.log("Current -> Line:" + currentIndex + ": " + data[currentIndex]);
				lines.push(currentIndex);
				switch(data[currentIndex][0]) {
				case "acc":
					accumulator += data[currentIndex][1];
					// console.log("Accumulator is now: " + accumulator);
					currentIndex++;
					break;
				case "jmp":
					jmpLines.push(currentIndex);
					currentIndex += data[currentIndex][1];
					break;
				case "nop":
					nopLines.push(currentIndex);
					currentIndex++;
					break;
				default:
					null;
				}
			}
		} else {
			//reset jmpLines and nopLines
			jmpLines = [];
			nopLines = [];
			// had NO infinite loop!
			console.log("Accumulator: " + accumulator);
			return "MADE IT TO THE END!";

		}
	}
}

function nopLoop(data) {
	nopJmpCk(data);
	console.log(nopLines);
	// loop through the lines that have "nop", change to "jmp", rerun nopJmpCk and check if they make it to the end
	for (let idx of nopLines) {
		let dataNew = [...data];
		dataNew[idx][0] = "jmp";
		console.log("dataNew  Line:"+ idx + ":  " + dataNew[idx]);
		nopJmpCk(dataNew);
	}
}

function jmpLoop(data) {
	nopJmpCk(data);
	console.log(jmpLines);
	// loop through the lines that have "nop", change to "jmp", rerun nopJmpCk and check if they make it to the end
	for (let idx of jmpLines) {
		let dataNew = [...data];
		dataNew[idx][0] = "nop";
		console.log("dataNew  Line:"+ idx + ":  " + dataNew[idx]);
		nopJmpCk(dataNew);
	}
}