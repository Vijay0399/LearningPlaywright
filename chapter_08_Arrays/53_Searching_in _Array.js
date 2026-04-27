let results = ["pass", "fail", "pass", "error", "fail"];

//index of - return the index of the first occurrence of the specified value in the array, or -1 if it is not found.

console.log(results.indexOf("pass")); // 0
console.log(results.indexOf("skip")); // -1

//last index of - return the index of the last occurrence of the specified value in the array, or -1 if it is not found.
console.log(results.lastIndexOf("fail")); // 4
console.log(results.lastIndexOf("skip")); // -1

//find - return the first matching element in the array based on the provided function, or undefined if it is not found.
let numbers = [1, 2, 3, 4, 5];
let evenNumber = numbers.find(num => num % 2 === 0);
console.log(evenNumber); // 2

let greaterThanFour = numbers.find(num => num > 4);
console.log(greaterThanFour); // 5

//findIndex - return the index of the first matching element in the array based on the provided function, or -1 if it is not found.
let evenNumberIndex = numbers.findIndex(num => num % 2 === 0);
console.log(evenNumberIndex); // 1