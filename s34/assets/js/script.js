let fruits = ["manzana", "naranja", "pera", "mango"];
console.log(fruits);
console.log("push");
fruits.push("fresa");
console.log(fruits);
console.log("pop");
fruits.pop();
console.log(fruits);
console.log("unshift");
fruits.unshift("uva");
console.log(fruits);
console.log("shift");
let deletedItem = fruits.shift();
console.log(`elemento eliminado con shift: ${deletedItem}`);
console.log(fruits);
console.log("includes");
console.log(fruits.includes("naranja")); // true
console.log(fruits.includes("kiwi")); // false
console.log("indexOF");
console.log(fruits.indexOf("naranja")); // 1
console.log(fruits. indexOf("kiwi")); // -1
console.log("join");
console.log(fruits.join("."));
console.log(fruits.join("--"));
console.log(fruits.join("1-2-3-4"));
console.log(fruits.join("$-$-$-$"));
console.log(fruits);
console.log("slice");
console.log(fruits.slice(2));
console.log(fruits.slice(2, 4));
console.log("splice");
fruits.splice(2, 2);
console.log(fruits);
fruits.splice(2, 2, " sandia", "kiwi", "arandano");
console.log(fruits);
console.log("==========");
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);
console.log("map");
let numsMAP = nums.map((x) => x + 3);
console.log(numsMAP);
console.log(nums.map((x) => x * 10));
console.log(nums.map((x) => `numero ${x}`));
console.log("filter");
let filterednums = nums.filter((x) => x > 5);
console.log(filterednums);
console.log(nums.filter((x) => x < 6));
console.log(nums.filter(x => x % 2 === 0));
console.log("reduce");
console.log(nums.reduce((a, b) => a + b, 0));
console.log(nums.reduce((a, b) => a * b, 1));




