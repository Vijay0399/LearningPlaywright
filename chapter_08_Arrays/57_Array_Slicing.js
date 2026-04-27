//Slicing & Combining Arrays
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//slice method - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
let slicedArr = arr.slice(2, 5);
console.log(slicedArr); // [3, 4, 5]    

console.log(arr.slice(2)); // [3, 4, 5, 6, 7, 8, 9]
console.log(arr.slice(3)); // [4, 5, 6, 7, 8, 9]


//combine arrays using concat method - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c); // [1, 2, 3, 4]