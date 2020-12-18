
function twoSums(nums, target) {
	let count = 0; // reset count with each twoSum
	let numObject = {};
	for (let i = 0; i < nums.length; i++) {
		let thisNum = nums[i];
		numObject[thisNum] = i;
	}
	for (var i = 0; i < nums.length; i++) {
		let diff = target - nums[i];
		if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
			console.log("Yes, we have a sum!" + nums[i] + " & " + diff + " = " + target);
			count++;
			return [i, numObject[diff]];
		}
	}
	count > 0 ? console.log(count): console.log("First ZERO count! The target # was " + target);
	// return "STOP";
}

function testLoop(pre, post, fullData) {

	// for each post entry, test to see if it is a sum of two pre numbers
	//loop through post
	if (post.length >= 1){
		for (let i = 0; i<post.length; i++) {
		// loop through the pres numbers
			let target = post[i];
			// console.log(target);
			twoSums(pre, target);
			fullData.shift();
			createPreamble(fullData, pre.length);
		}
	}
}

function createPreamble(fullData, preNum) {
	console.log("- - - - - - - - - - - - - -");
	let pre = [];
	let post = [];
	console.log("FullData.length = " + fullData.length);

	// splitting the fullData array into the preamble (pre) and the rest (post)
	if(fullData.length > preNum) {
		pre = fullData.slice(0, preNum);
		console.log("Pre:");
		console.log(pre);
		post = fullData.slice(preNum, fullData.length);
		console.log("Post:");
		console.log(post);
		testLoop(pre, post, fullData);
	}
}

function start(input, preNum) {
	let fullData = [...input];
	createPreamble(fullData, preNum);
}