// required fields minus cid
let reqFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

function ckFields(input) {
	// for each object in the data array, check to see if it has the required keys:value;
	let idCount = 0;
	let totalCount = 0;
	// looping through the data array
	for (const pass of input) {
		totalCount++;
		let fieldCount = 0;

		console.log("- - - - - ");
		// looping through the required fields and check each pass for key
		for (const field of reqFields) {
			// pass.hasOwnProperty(field)
			if(pass.hasOwnProperty(field)) {
				fieldCount++;
			}
		}
		console.log(fieldCount);
		if(fieldCount === reqFields.length) {
			idCount++;
		}
	}
	return ("Total count: " + totalCount + "  Valid passports: " + idCount);
}

function validFields(input) {
	// for each object in the data array, check to see if it has the required keys:value;
	let totalCount = 0;
	let passCount = 0;

	// looping through the data array
	for (const pass of input) {
		totalCount++;
		let validCount = 0;
		console.log("- - - - - ");
		// loop through the required fields
		for (const fieldKey in pass){
			// birth year
			if(fieldKey ==="byr") {
				let byrMin = 1920;
				let byrMax = 2002;
				if(pass.byr >= byrMin) {
					if(pass.byr <= byrMax) {
						console.log("BYR = " + pass.byr + "   Range: " + byrMin + "-" + byrMax);
						validCount++;
					}
				}
			}
			// issue year
			if(fieldKey === "iyr") {
				let iyrMin = 2010;
				let iyrMax = 2020;
				if(pass.iyr >= iyrMin) {
					if(pass.iyr <= iyrMax ) {
						console.log("IYR = " + pass.iyr + "   Range: " + iyrMin + "-" + iyrMax);
						validCount++;
					}
				}
			}
			// expiration year
			if(fieldKey === "eyr") {
				let eyrMin = 2020;
				let eyrMax = 2030;
				if(pass.eyr >= eyrMin) {
					if(pass.eyr <= eyrMax) {
						console.log("EYR = " + pass.eyr + "   Range: " + eyrMin + "-" + eyrMax);
						validCount++;}
				}
			}
			// height
			if(fieldKey === "hgt") {
				let hgtValue = pass.hgt;
				let hgtNums = pass.hgt.slice(0,(pass.hgt.length-2));
				let cmRe = /^\d{3}cm$/;
				let inRe = /^\d{2}in$/;
				if(hgtValue.match(cmRe)) {
					let cmMin = 150;
					let cmMax = 193;
					if(cmMin <= hgtNums <= cmMax){
						console.log(hgtValue + " Range: " + cmMin + "-" + cmMax);
						validCount++;
					}
				} else if(hgtValue.match(inRe)) {
					let inMin = 59;
					let inMax = 76;
					if(inMin <= hgtNums <= inMax){
						console.log(hgtValue + " Range: " + inMin + "-" + inMax);
						validCount++;
					}
				}
			}
			// hair color
			if(fieldKey === "hcl") {
				let hclValue = pass.hcl;
				let re = /#(\d|[a-f]){6}/;
				if(hclValue.match(re)) {
					console.log("Hair Color: " + hclValue);
					validCount++;
				}
			}
			// eye color
			if(fieldKey === "ecl") {
				let eyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
				for(const color of eyeColors){
					if(color === pass.ecl){
						console.log("Eye color: " + pass.ecl);
						validCount++;
					}
				}
			}
			// passport number
			if(fieldKey === "pid") {
				let passNum = pass.pid;
				let re = /^\d{9}$/;
				if(passNum.match(re)){
					console.log("Passport Number: " + pass.pid);
					validCount++;
				}
			}
		}
		// if the object meets all the validation requirements, add it to the valid count
		if(validCount >= 7) {
			passCount++;
			console.log("VALID");
		}
	}

	return ("Total count: " + totalCount + "  Valid passports: " + passCount);
}