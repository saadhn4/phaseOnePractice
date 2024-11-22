//Write a program to convert a JavaScript object into JSON format and back to an object
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
