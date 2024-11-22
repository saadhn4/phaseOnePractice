// Create a student object. Add subjects and marks as key-value pairs. Calculate the average marks.

let obj = {
  science: 95,
  math: 82,
  english: 31,
  ssc: 23,
  arabic: 100,
};

let { science, math, english, ssc, arabic } = obj;

console.log((science + math + english + ssc + arabic) / 5);
