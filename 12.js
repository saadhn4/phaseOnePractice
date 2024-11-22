// Type Conversions
// - Write a program that takes input as a string and converts it to a boolean using explicit conversion.
// Check for truthy and falsy values

let str = "hello"; //true
str = ""; //false
str = "0"; //true cuz not empty string
str == "0"; //still true cuz its string
let converted = Boolean(str);
console.log(converted);

//all empty strings are false
