let testData = [
	["nop", 0], // 1   Line0
	["acc", 1], // 2, 8!  Line1
	["jmp", 4], // 3  Line2
	["acc", 3], // 6  Line3
	["jmp", -3],  // 7  Line4
	["acc", -99], // Line5
	["acc", 1], // 4  Line6
	["jmp", -4], // 5  Line7
	["acc", 6] // Line 8
];

// order
// Line0
// Line1
// Line2
// Line6
// Line7
// Line3
// Line4
// Line1