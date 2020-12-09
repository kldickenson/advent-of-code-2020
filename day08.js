// if key[] === 0, array[i] = +1
// MUST BE: line + key[value] is greater than 0
// nop = move ahead 1
// acc = line + key[value]
// jmp =  line + key[value], since key[value]< 0 it moves "backward";

function infiniteCk(data) {
// create an array of visited lines to keep track of where we have been
	let lines = [];

	// Need to start at line 1 = data[0]
	let currentIndex = 0;

	for (let i = 0; i<data.length; i++){
		if (i === currentIndex) {
			switch(data[i][0]) {
			case "nop":
				lines.push(data[i]);
				console.log("Line" + currentIndex);
				currentIndex++;
				break;
			case "acc":
			case "jmp":
				console.log("Line" + currentIndex);
				if (lines.includes(data[i])) {
					console.log("This is where it repeats! Line" + currentIndex);
					return "STOP!";
				} else {
					lines.push(data[i]);
					let val = data[i][1];
					console.log(typeof val);
					if(val < 0) {
						currentIndex += val;
					} else {
						currentIndex += val;
					}
				}
				break;
			}
		}
	}
	console.log(lines);
}
