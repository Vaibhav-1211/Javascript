//Javascript Fundamentals Part-2

//1.Activating Strict mode
//Strict mode is special mode that we can activate in js which make it easier for us to write secure js code.

'use strict';

// let hasDriversLicense = true;
// const passTest = false;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D")

// const interface = 'Audio';//Error because it is reserved word
//const private = 324;//error resereved keyword
//const if = 22;error unexpected token if

//2. Functions: It is pice of code that we can reuse in over and over again in program.

// function logger() {
//   console.log('My name is Roman')
// }
// logger();//This is called invoking the function / calling the function /Running the function

// function fruitProcessor(apple, oranges) { //passing parameters are like variable that are specific to this function.
//   console.log(apple, oranges)
//   const juice = `Juice with ${apple} apple and ${oranges} oranges.`
//   return juice;//this became the result of executing this funciton. 
// }
// //once the function is executed than this function calling is replaced by the results that the value which is returned. Juice string.
// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)

// // console.log(fruitProcessor(5, 0))
// //we can reuse the function with different input values.

// const appleOrangesJuice = fruitProcessor(2, 4)
// console.log(appleOrangesJuice)

//Function allows us write more maintable code.

//Function Declaration vs Expression

