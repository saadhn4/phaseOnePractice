//Use filter, map, and reduce to find the sum of squares of even numbers in an array.

let arr = [1, 4, 5, 2, 3];
let filtered = arr.filter((n) => n % 2 == 0);
console.log(filtered);
let squares = filtered.map((n) => n * n);
console.log(squares);
let added = squares.reduce((acc, curr) => acc + curr, 0);
console.log(added);
