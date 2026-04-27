let num = [1, 9, 8, 7, 10, 2, 5, 3];
//sort method - sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
num.sort();
console.log(num); // [1, 10, 2, 3, 5, 7, 8, 9]  

let names = ["John", "Alice", "Bob", "Charlie"];
names.sort();
console.log(names); // ["Alice", "Bob", "Charlie", "John"]  

//sort method with compare function - sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
num.sort((a, b) => a - b); //sort in ascending order
console.log(num); // [1, 2, 3, 5, 7, 8, 9, 10]

num.sort((a, b) => b - a); //sort in descending order
console.log(num); // [10, 9, 8, 7, 5, 3, 2, 1]

let fruits = ["banana", "apple", "grape", "orange"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "grape", "orange"]
