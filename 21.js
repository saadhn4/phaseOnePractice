// Hoisting
// - Write a program to demonstrate function and variable hoisting. Explain the output.
greet();
function greet() {
  console.log("Hello");
}

console.log(a); //undefined
var a = 10;

// console.log(b); Cannot access 'b' before initialization
// let b = 20;

//console.log(c); ReferenceError: Cannot access 'c' before initialization
// let c = 30;
