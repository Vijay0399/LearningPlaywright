let score = [45, 82, 91, 60, 73];

//map method - creates a new array populated with the results of calling a provided function on every element in the calling array.
//Transform evenry element, return new array
let grade1 = score.map(s => s >= 70 ? "Pass" : "Fail");
console.log(grade1); // ["Fail", "Pass", "Pass", "Fail", "Pass"]

let grade = score.map(s => s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F");
console.log(grade); // ["F", "B", "A", "D", "C"]

//filter method - creates a new array with all elements that pass the test implemented by the provided function.
//Filter out elements that are greater than or equal to 70
let passingScores = score.filter(s => s >= 70);
console.log(passingScores); // [82, 91, 73] 

//reduce method - executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
//Calculate the sum of all scores
let totalScore = score.reduce((total, s) => total + s, 0);
console.log(totalScore); // 351 

//flatten method - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nestedArray = [[1, 2], [3, 4], [5, 6]];
let flatArray = nestedArray.flat();
console.log(flatArray); // [1, 2, 3, 4, 5, 6]
