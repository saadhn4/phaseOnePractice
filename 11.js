// . Scoping & Variables
// - Demonstrate the difference between `var`, `let`, and `const` with examples of block scope

{
  var x = 10;
  let y = 20;
  const z = 30;
}

console.log(x);
// console.log(y); ReferenceError: y is not defined
// console.log(z); ReferenceError: z is not defined
