// if key[] === 0, array[i] = +1
// MUST BE: line + key[value] is greater than 0
// nop = move ahead 1
// acc = line + key[value]
// jmp =  line + key[value], since key[value]< 0 it moves "backward";

function infiniteCk(data) {
// create an array of visited lines to keep track of where we have been
	let lines = [];

	// Need to start at line 1 = data[0]
	let currentLine = data[0];


	for (let i = 0; i<data.length; i++){
		switch(data[i][0]) {
		case "acc":
		case "jmp":
			lines.push(data[i]);
			currentLine = i + data[i][1];
			break;
		default: // this covers 'nop'
			lines.push(data[i]);
			currentLine += 1;
			break;
		}
		console.log("i " + currentLine);
	}

	// if a line has already been visited, mark previous move as start of infinite loop
	if (!lines.includes(data[i])) {
		lines.push(data[i]);
	} else {
		console.log("This is where it repeats!");
	}

	// let currentLine = lines[lines.length-1];

}
