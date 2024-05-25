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

//2.------> Functions: It is pice of code that we can reuse in over and over again in program.

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

//3.------> Function Declaration vs Expression
//Two types of funciton 1. Decaration and expression
///Function DeclarationCalculate the age by function
//Function Declaration

// console.log(age1, age2);//it only possible in function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear; //we need to save this result or can directly consoloing it.
// }
// const age1 = calcAge1(1991);

// //This above is function declaration.

// //Now Function expression
// //writing function without name is called anonymous function
// const calcAge2 = function (birthYeard) {
//   return 2048 - birthYeard
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

//--> Main difference between function declaration is that we can call it before they defined in code. But same for Function expression won't work and internally this happens due to process called hoeisting.


// 4. Arrow Function - It is special form of function expression that is shorter and faster to write.

// //Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }

//--> Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// //how many year person left with retirement

// const yearUnitRetirement = (birthYear,firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearUnitRetirement(1991,'Roni'))

//5.------>Function calling other functions

// function cutFruitPieces(fruit){
//   return fruit * 4;
// }

// function fruitProcessor(apple, oranges) { 
//     const applePieces = cutFruitPieces(apple);
//     const orangePices = cutFruitPieces(oranges);//based on don't repeat yourself

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePices} pieces of oranges.`
//     return juice;
//   }

//   console.log(fruitProcessor(2,3))//this are argument for the cutPieces function and it will basically replace fruit parameter

//Reviewing functions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearUnitRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear)
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`)
    return retirement;//return keyword immidietly exit the function  after returning the value;after that function is done.
  } else {
    console.log(`${firstName}has already retired .`)
    return 0
  }
  // return retirement;
  // return `${firstName} retires in ${retirement} years.`;
}

console.log(yearUnitRetirement(1991, 'Joker'))

console.log(yearUnitRetirement(1997, 'Joker'))
console.log()