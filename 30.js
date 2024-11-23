//Write a program to calculate the number of days between two dates.

function daysBetween(day1, day2) {
  let start = new Date(day1);
  let end = new Date(day2);
  let difference = end - start;
  let daysDifference = difference / (1000 * 3600 * 24);
  return Math.abs(daysDifference);
}

let day1 = "2024-11-19";
let day2 = "2024-11-20";

console.log(daysBetween(day1, day2));
