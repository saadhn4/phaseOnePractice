//Recursion;
// - Write a recursive function to calculate the factorial of a number

function fac(number) {
  if (number == 0 || number == 1) {
    return 1;
  }
  return number * fac(number - 1);
}
console.log(fac(5));
