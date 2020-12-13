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

	// Need to start at line 1 = data[0]
	let currentIndex = 0;
	let accumulator = 0;

	for(let i = 0; i<data.length; i++) {
		if(currentIndex < data.length){

			if (lines.includes(currentIndex)) {
				console.log("This is where it repeats! Line" + currentIndex + ": [" + data[currentIndex] + "]");
				// console.log("Lines: " + lines);
				// console.log("Accumulator: " + accumulator);
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
					currentIndex += data[currentIndex][1];
					break;
				case "nop":
					currentIndex++;
					break;
				default:
					null;
				}
			}
		} else if (currentIndex > data.length){
			console.log("MADE IT TO THE END! Accumulator: " + accumulator);
			return(accumulator);
		} else {
			// had NO infinite loop!
			console.log("Accumulator: " + accumulator);
		}
	}
}

function nopLoop(data) {
	// find the data lines with "jmp";
	for (let n = 0; n < data.length; n++) {
		if(data[n][0] === "nop"){
			nopLines.push(n);
		}
	}
	console.log(nopLines);

	// lets see if this works for a single item; YES!!
	// let dataNew = [...data];
	// let lineNum = 582;
	// dataNew[lineNum][0] = "jmp";
	// console.log("dataNew: " + dataNew[lineNum]);
	// nopJmpCk(dataNew);

	// loop through the lines that have "nop", change to "jmp", rerun nopJmpCk and check if they make it to the end
	for (let i = 0; i < nopLines.length; i++) {
		console.log("- - - - - - - - - - - - - - - - - -");
		let dataNew = [];
		dataNew = [...data]; // resetting dataNew on each iteration
		let x = nopLines[i];
		dataNew[x][0] = "jmp";
		console.log("dataNew  Line:"+ x + ":  " + dataNew[x]);
		nopJmpCk(dataNew);
	}
}

function jmpLoop(data) {
	// find the data lines with "jmp";
	for (let j = 0; j < data.length; j++) {
		if(data[j][0] === "jmp"){
			jmpLines.push(j);
		}
	}
	console.log(jmpLines);
	// lets see if this works for a single item; YES!!
	let dataNew = [...data];
	let lineNum = 627;
	dataNew[lineNum][0] = "nop";
	console.log("dataNew: " + dataNew[lineNum]);
	nopJmpCk(dataNew);
	// loop through and change "jmp" to "nop", rerun nopJmpCk at each loop and check if they make it to the end
	// for (let i = 0; i < jmpLines.length; i++) {
	// 	console.log("- - - - - - - - - - - - - - - - - -");
	// 	let dataNew = [];
	// 	dataNew = [...data]; // resetting dataNew on each iteration
	// 	let x = jmpLines[i];
	// 	dataNew[x][0] = "nop";
	// 	console.log("dataNew  Line:"+ x + ":  " + dataNew[x]);
	// 	nopJmpCk(dataNew);
	// }
}