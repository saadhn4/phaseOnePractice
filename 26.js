// 6. Spread Operator
// - Merge two arrays using the spread operator and find the maximum value in the merged array

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArr = [...arr1, ...arr2];
console.log(mergedArr);

let highest = Math.max(...mergedArr);
console.log(highest);
