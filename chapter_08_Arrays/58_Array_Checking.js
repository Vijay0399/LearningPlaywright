let result = Array.isArray([1, 2, 3]);
console.log(result); // true

let a = [1, 2, 3, 4];
let b = Array.isArray(a);
console.log(b); // true 


//every method - tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
let scores = [85, 90, 78, 92];
let allPassed = scores.every(score => score >= 60);
console.log(allPassed); // true 

//some method - tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
let hasFailed = scores.some(score => score < 60);
console.log(hasFailed); // false        
