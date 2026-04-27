let Tests = ["login", "checkput", "search"];
for (let i = 0; i < Tests.length; i++) {
    console.log(Tests[i]);
}

console.log("--------------------------");

//for of loop
for (let test of Tests) {  //test is a variable that will hold the value of each element in the array during each iteration of the loop.
    console.log(test);
}

//for each loop
Tests.forEach(test => console.log(test)); //test is a variable that will hold the value of each element in the array during each iteration of the loop.

Tests.forEach((test1, index) => console.log(`${index} : ${test1}`)); //test1 is a variable that will hold the value of each element in the array during each iteration of the loop, index is the index of the current element being processed in the array.

//Entries method - returns an iterator object that contains the key/value pairs for each index in the array.
for (let [index, test] of Tests.entries()) {
    console.log(`${index} : ${test}`);
}