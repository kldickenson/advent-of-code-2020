function infiniteCk(data) {

	// create an array of visited lines to keep track of where we have been
	let lines = [];

	// Need to start at line 1 = data[0]
	let currentIndex = 0;
	let accumulator = 0;

	for(let i = 0; i<data.length; i++) {
		if (lines.includes(currentIndex)) {
			console.log("This is where it repeats! Line" + currentIndex + ": [" + data[currentIndex] + "]");
			console.log("Lines: " + lines);
			console.log("Accumulator: " + accumulator);
			return "STOP!";
		} else {
			console.log("Current -> Line:" + currentIndex + ": " + data[currentIndex]);
			lines.push(currentIndex);
			switch(data[currentIndex][0]) {
			case "acc":
				let val = data[currentIndex][1];
				accumulator += val;
				console.log("Accumulator is now: " + accumulator);
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

