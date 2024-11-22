// . Array Methods
// - Write a program to sort an array of numbers in ascending order using `sort`.

// first i need to create a function called compare

let compare = (a, b) => {
  return a - b;
};

let arr = [10, 2, 1, 67, 27];
let result = arr.sort(compare);
console.log(result);
