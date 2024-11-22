// Use  `for...of`  to  iterate  over  an  array  of  numbers  and  calculate  their  sum.

let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i of arr) {
  sum += i;
}
console.log(sum);

//Use  `for...in`  to  log  all properties of an object.

let obj = {
  name: "Saad",
  age: 20,
};

for (let i in obj) {
  console.log(i);
}
