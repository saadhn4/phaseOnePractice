//- Write a program that takes a day number (1-7) and logs whether it's a weekday or weekend using
//a `switch` statement

let day = 1;

switch (day) {
  case 1:
    console.log("Monday : Weekday");
    break;
  case 2:
    console.log("Tuesday : Weekday");
    break;
  case 3:
    console.log("Wednesday : Weekday");
    break;
  case 4:
    console.log("Thursday : Weekday");
    break;
  case 5:
    console.log("Friday : Weekday");
    break;
  case 6:
    console.log("Saturday : Weekend");
    break;
  case 7:
    console.log("Sunday : Weeend");
    break;
  default:
    console.log("Invalid...");
    break;
}
