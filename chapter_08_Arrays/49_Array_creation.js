let fruits = [];

let fruits_fresh = ["apple", "banana", "grapes", "orange", "kiwi"];

console.log(fruits_fresh);

let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
let arr2 = ["apple", "banana", "grapes", "orange", "kiwi"];
console.log(arr2);
let arr3 = [1, "apple", true, null, undefined, { name: "John" }, [1, 2, 3]];
console.log(arr3);

// array constructor
let arr4 = new Array(3); // creates an array of length 3 with empty slots
let arr5 = new Array(1, 2, 3); // creates an array with the elements 1, 2, and 3        
console.log(arr4);
console.log(arr5);

//of method
let arr6 = Array.of(1, 2, 3); // creates an array with the elements 1, 2, and 3
console.log(arr6);
console.log(arr6[1]);// accessing the second element of the array (index 1) and printing it to the console  


// Array,from()
let arr7 = Array.from("hello"); // creates an array from the string "hello", resulting in ['h', 'e', 'l', 'l', 'o']
console.log(arr7);

