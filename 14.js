// Nested If-Else
// - Write a program that grades a student based on their marks (e.g., >90: A, >75: B, >50: C, <=50:
// F)

//dount

let marks = 90;
if (marks >= 90) {
  if (marks >= 75) {
    console.log("B");
  }
  console.log("A");
} else if (marks > 50) {
  console.log("C");
} else {
  console.log("F");
}
