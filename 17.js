// Default Parameters
// - Create a function that calculates the area of a rectangle. If only one parameter is provided, assume
// it's a square

function area(l = 1, b = l) {
  //bc area of square is sxs
  return l * b;
}
console.log(area(5));
