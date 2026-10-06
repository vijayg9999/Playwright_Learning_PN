/*Assignments On Operators
=============================*/

console.log(1 + "2" + 3);//123

console.log(1 + 2 + "3");//33

console.log("5" * true);//5

console.log(10 > 5 > 1);//false

let a = 2;
    let b = a++ + ++a;
    console.log(a, b);//(4,6)

let a = 3;
console.log(a++ + a++ + ++a);//13

console.log(5 * 2 == "10");//true

let x = 1;
let y = ++x + x++ + x;
console.log(x, y);//(3,7)

console.log(10 > 5 && 20 < 30);//true

console.log(null || undefined || "Playwright");//Playwright

/*
-----------------------------------------------------------------
JavaScript Practice: Type Coercion & Explicit Conversion
===========================================================
*/
/*
Problem 1 — UI Price and Quantity
A product page returns the following values as strings:
let price = "500";
let quantity = "3";
Calculate the total price.
*/
let price = "500";
let quantity = "3";
console.log("Total Price is: "+(price*quantity));

/*
Problem 2 — UI Price + Tax
The UI returns:
let price = "1000";
let tax = "200";
Calculate the final price.
*/
let price1 = "1000";
let tax = "200";
console.log("Final Price is: "+(Number(price1)+Number(tax)));//1200

/*
Problem 3 — Understand + Coercion
Consider:
let actual = "100";
let expected = 20;
What will be the output of:
console.log(actual + expected);
*/
let actual = "100";
let expected = 20;
console.log(actual + expected);//10020

/*
Problem 4 — Understand - Coercion
Consider:
let actual = "100";
let expected = 20;
What will be the output of:
console.log(actual - expected);
*/
let actual1 = "100";
let expected1 = 20;
console.log(actual1 - expected1);//80

/*
Problem 5 — UI Value and Assertion
A UI displays:
100
The automation code receives it as:
let actualPrice = "100";
let expectedPrice = 100;
Check the result of:
console.log(actualPrice == expectedPrice);
console.log(actualPrice === expectedPrice);
*/
let actualPrice = "100";
let expectedPrice = 100;
console.log(actualPrice == expectedPrice);//true
console.log(actualPrice === expectedPrice);//false

/*
Problem 6 — Fix the Assertion
The following automation code is failing:
let actualPrice = "500";
let expectedPrice = 500;
console.log(actualPrice === expectedPrice);

Modify the code so that the assertion gives:
true
*/
let actualPrice1 = "500";
let expectedPrice1 = 500;
console.log(actualPrice1 === expectedPrice1);//false
console.log(actualPrice1 == expectedPrice1);//true

/*
Problem 7 — Environment Variable
An automation framework reads the timeout from an environment variable:
let timeout = "30000";
Convert it into a number and print:
The value
Its data type

Expected Output:
30000
number
*/
let timeout = "30000";
console.log(Number(timeout));
console.log(typeof Number(timeout));

/*
Problem 8 — Order ID
An API returns:
let orderId = 12345;
Convert the order ID into a string and create:
ORDER-12345
*/
let orderId = 12345;
console.log("ORDER-"+orderId.toString());

/*
Problem 9 — Boolean API Value
An API returns:
let status = "true";
Convert this value into an actual Boolean.

Expected Output:
true
boolean
*/
let status1 = "true";
console.log(stringToBoolean(status1));//not sure need help with this

/*
Problem 10 — Input Field Value
A Playwright test retrieves a quantity from an input field:
let quantity = "5";
The expected quantity is:
let expectedQuantity = 5;
*/
//Need help with this question

/*
Problem 11 — Calculate Cart Total
An e-commerce application provides:
let price = "799";
let quantity = "2";
let discount = "100";
Calculate:
(price × quantity) - discount

Expected Output:
1498
*/
let price2 = "799";
let quantity2 = "2";
let discount = "100";
console.log("Total Price is: "+((price2*quantity2)-discount));//Implicit Conversion
console.log("Total Price is: "+((Number(price2)*Number(quantity2))-Number(discount)));//Explicit Conversion

console.log("-----------Conditional Satements Program-------------");
console.log("================Assignment1====================");
/* Assignment1: 
Problem: 
Write a JavaScript program to check whether a number is even or odd. */
console.log("---Even or Odd-----");
let aNum = 51;
if (aNum %2 === 0)
 {
    console.log(aNum+" is even!");    
 } else
 {
    console.log(aNum+" is odd!");
    
 }

console.log("================Assignment2====================");
/*Assignment2: 
Problem: 
Print the day of the week based on number (1–7). 
What you will use here? If-else or switch case? */

let dayOfWeek = 5;
let message = "";

switch (dayOfWeek) {
case 1:
message = "Today is Monday";
break;
case 2:
message = "Today is Tuesday";
break;
case 3:
message = "Today is Wednesday";
break;
case 4:
message = "Today is Thursday";
break;
case 5:
message = "Today is Friday";
break;
case 6:
message = "Today is Saturday";
break;
case 7:
message = "Today is Sunday";
break;
default:
message = "Enter a valid Day of Week from 1 to 7";
}
console.log(message); 

console.log("================Assignment3====================");
/*Assignment 3: 
Problem: Write .js script that evaluates a test case result based on HTTP 
response status code the program should use Nester if..else statements to 
determine result message.  
Instructions:  
1.create a new file named testResult.js Inside the file declare variable to store 
status code Let responseCode=200;  
2.use if else Nested statements to evaluate response code and print status 
message  
3.Use the following logic for result evaluation: I 
f response Code is 100-199→print: Informational  
If response Code is 200-299→print: successful  
If response Code is 300-399→print: Redirectional  
If response Code is 400-499 →print: Client Error 
If response Code is 500-599→print: Server Error For any other code →print 
Unkown Status code  
4.Run script using node testResult.js   */

let responseCode = 645;

if(responseCode>=100 && responseCode<=199)
{
    console.log("This response code is Informational");    
}else if(responseCode>=200 && responseCode<=299)
{
    console.log("This response code is Successful");    
}else if(responseCode>=300 && responseCode<=399)
{
    console.log("This response code is Redirectional");    
}else if(responseCode>=400 && responseCode<=499)
{
    console.log("This response code is Clinet Error");    
}else if(responseCode>=500 && responseCode<=599)
{
    console.log("This response code is Server Error");    
}else 
{
    console.log("Unknown Status Code");    
}

console.log("================Assignment4====================");
/* Assignment 4
Problem:  Write a script that suggests what clothing to wear based on the 
current temperature The program should use if...else or if...else if statements to 
determine the suggestion.  
Instructions: 1. Create a new file named weather.js. Inside the file, declare a 
variable to store the temperature,  
for example: let temperature = 28;  
2. Use if...else or if...else if statements to decide and print the clothing 
suggestion based on the temperature 
3. Use the following logic for clothing suggestion:  
If temperature is above 35°C Print: wear light cotton clothes  
◦ If temperature is between 20°C and 35°C Pint: Normal casual wear  
○ If temperature is between 10°C and 19°C Print: Wear a jacket  
○ If temperature is below 10°C Print: stay indoors, it's too cold! Run the script 
using: node weather.js  
Test Cases to Try: • temperature = 40 • temperature = 28 . temperature- 15  */

let temperature = 90;
if(temperature >35)
{
    console.log("Wear light cotton clothes");    
}else if(temperature >=20 && temperature <=35)
{
    console.log("Normal casual wear");    
}else if(temperature >=10 && temperature <=19)
{
    console.log("Wear a Jacket");    
}else //if(temperature <10)
{
    console.log("Stay indoors, its's too cold!");    
}

console.log("================Assignment5====================");
/* Assignment5:  
Problem: Create a Javascript that checks whether the given username and 
password match the predefined login credentials using simple variables 
Instructions:  
1. Greate a new file named login.js.  
2. Inside the file, do the following: Declare two variables for user input: let 
enteredUsername = "Priyanka"; // Keep changing  
let enteredPassword = "Nigade":;//Keep changing (Change "some _ value" to 
simulate different test cases.)  
Declare two predefined credentials:  
const correctusername = "admin@emalil.com",  
const correctPassword = "admin@123";  
3. Use an if...else statement to compare: If both enteredusername and 
enteredPassword match the correct credentials, print: Login Successful 
Otherwise, print: Invalid credentials Run the script using: node login.js */

