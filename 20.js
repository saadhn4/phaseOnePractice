// Try-Catch Block
// - Write a program to parse a JSON string. If parsing fails, catch and log the error

//first i need to create an object and convert it to a JSON string; ill do everything in try catch

try {
  let obj = {
    fname: "Saad",
    age: 20,
  };
  console.log(obj);
  let convert = JSON.stringify(obj);
  console.log(convert);
  let convBack = JSON.parse(convert);
  console.log(convBack);
} catch (error) {
  console.log(`${error}`);
}
