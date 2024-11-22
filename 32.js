// - Filter all odd numbers from an array and then double them using `map`.

let arr = [1, 10, 5, 3, 6, 8, 9, 2];
let oddNumbers = arr.filter((n) => n % 2 != 0);
console.log(oddNumbers);
let double = oddNumbers.map((n) => n * 2);
console.log(double);
