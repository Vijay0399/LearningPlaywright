let [first, second, ...third] = [10, 20, 30, 40, 50];
console.log(first); // 10
console.log(second); // 20      
console.log(third); // [30, 40, 50] - rest operator - collects the remaining elements of the array into a new array.

let [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2    
let [x, y, z] = [5, 10];
console.log(x); // 5
console.log(y); // 10
console.log(z); // undefined - since there is no third element in the array, z will be assigned undefined.  