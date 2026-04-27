//Adding & Remove in Array

let arr = [1, 2, 3, 4, 5];
console.log(arr);
//Adding element in array
arr.push(6);
console.log(arr);

//Removing element from the end on an array
arr.pop();
console.log(arr);

//Adding element in the beginning of an array
arr.unshift(0);
console.log(arr);

//Removing element from the beginning of an array
arr.shift();
console.log(arr);

//Splice method to add/remove element in an array

arr.splice(2, 1);//removing element from an array using splice method from index 2 and removing 1 element
console.log(arr);

arr.splice(2, 0, 10);//Adding element in an array using splice method from index 2 and adding 10 and not removing any element   
console.log(arr);

arr.splice(1, 2, 10, 20);//Adding element in an array using splice method from index 1 and adding 10 and 20 and removing 2 element
console.log(arr);   