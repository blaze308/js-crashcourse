let firstName = "John";
let lastName = "Doe";
let age = 21;

console.log(firstName);
console.log(lastName);
console.log(age);

console.log("My name is " + firstName + " " + lastName + "."
    + " I am " + age + " years old");

console.log(`My name is ${firstName} ${lastName}. I am ${age} years old`);

let fruits = ["Mango", "Banana", "Guava", "Apple", "Orange"]

console.log(fruits);
console.log(fruits.length);
console.log(fruits[3]);
console.log(fruits.push("Grapes"));
console.log(fruits);

console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits);

console.log(fruits.unshift("Pear"));
console.log(fruits)
console.log(fruits.shift());

console.log(fruits.includes("Apple"));
console.log(fruits.includes("Ginger"));
console.log(fruits.includes("Beans"));

console.log(fruits.join("--"));