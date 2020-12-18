
function twoSums(nums, target) {
	let count = 0; // reset count with each twoSum
	let uniqueNums = [...new Set(nums)];
	// hash of pres
	let numObject = {};
	for (let i = 0; i < uniqueNums.length; i++) {
		let thisNum = uniqueNums[i];
		numObject[thisNum] = i;
	}
	// console.log(numObject);
	for (var i = 0; i < uniqueNums.length; i++) {
		if(count > 0 ){
			return true;
		}
		let diff = target - uniqueNums[i];
		if (numObject.hasOwnProperty(diff)) {
			// console.log("Yes, we have a sum! " + uniqueNums[i] + " & " + diff + " = " + target);
			count++;
		}
	}
	return false;
}

function testLoop(pre, post, fullData) {
	// for each post entry, test to see if it is a sum of two pre numbers
	//loop through post
	if (post.length >= 1){
		for (let i = 0; i<post.length; i++) {
		// loop through the pres numbers
			let target = post[i];
			let result = twoSums(pre, target);
			if (result === true) {
				fullData.shift();
				return(createPreamble(fullData, pre.length));
			} else {
				return target;
			}
		}
	}
}

function createPreamble(fullData, preNum) {
	let pre = [];
	let post = [];
	// splitting the fullData array into the preamble (pre) and the rest (post)
	if(fullData.length > preNum) {
		console.log("- - - - - - - - - - - - - -");
		console.log("FullData.length = " + fullData.length);
		pre = fullData.slice(0, preNum);
		post = fullData.slice(preNum, fullData.length);
		return(testLoop(pre, post, fullData));
	}
}

function start(input, preNum) {
	let fullData = [...input];
	return(createPreamble(fullData, preNum));
}