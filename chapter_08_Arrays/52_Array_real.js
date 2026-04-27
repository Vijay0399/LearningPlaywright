let browser = ["chrome", "firefox", "edge", "safari", "opera"]
console.log(browser.length);
console.log(browser);

//Using POP method to remove element from the end of an array
browser.pop();
console.log(browser);

console.log("------------------");

let reomoved = browser.shift();     //Using Shift method to remove element from the beginning of an array
console.log(reomoved);
console.log(browser);

console.log("------------------");

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera is removed from the array");
    }
}