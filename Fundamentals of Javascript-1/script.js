/* let js = 'amazing';
if (js === 'amazing')
  console.log('Hello')
console.log(24)

// 1.Values and variables
let firstName = 'Vaibhav'
console.log(firstName);

//Variable name cannot start with number
//$ symbol is allowed to use as variable name in js
let $function = 'FuntionSir'
//name is stil resereved keyword but it allows and still leagal to use
let name = 'Hoeny Singh'
//We should not start variable name with uppercase letter
let person = 'Kevin'
//Variable that all are in uppercase are resevered for  constants that are never change like
let PI = 3.1415;
//Final one that variable naem must be descriptive
let myFirstJob = "Programmer"

let job1 = 'Software Engineer'

//Variable is a box in which can store the value.
console.log(myFirstJob);

//2.Data types
//Boolean
let javascriptIsFun = true;
console.log(javascriptIsFun);

//typeOf
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "roman");

//Dynamic typing - easily change type of value that is hold by the variable
javascriptIsFun = 'YEET!'
console.log(typeof javascriptIsFun);

//Number ,String, and Boolean are most used data type and there are more undefined and null, symbole and bigInt.

// undefined: Value taken by variable that is not yet defined means empty value
let year;
console.log(year);
console.log(typeof year);
year = 1992

console.log(typeof year);

//Null is another data type and it is similar to undefined
//Error in null
console.log(typeof null);
//JS bug is that the typeof null is object.
*/


//3.let const var

// //Let is used when we have to change that variable later
// let age = 20;
// age = 21;
// //here we mutating the age variable.

// //const: keyword t0 declared variable that are not supposed to change at any point in future.

// const birthYear = 2000;
// // birthYear = 1990;

// //It should work we get error
// //It immutable varible in other words it varible which cannot be changed

// //const job;
// //this is way we can not use the const it needs the initial value. value must be passed in const otherwise it gives the error.

// var job = 'programmer';
// job = 'Doctor';
// //it is pretty similar to let
// //not recommend to use it

//4. Operators

//Math operator
//minus op
// const age = 2024
// const vaibhavAge =   age - 2000;
// const swayamAge =   age - 2005;
// console.log(vaibhavAge);
// console.log(swayamAge,vaibhavAge);

// console.log(vaibhavAge * 2, swayamAge / 21,2 ** 3 );
// //2 ** 3 means 2 to the power of 3 = 2 * 2 *2. It called exponential op

// //Plus op or concatination op
// const firstName = 'Jonas';
// const lastName = 'Patel';
// console.log(firstName +' ' +lastName);

// //typeof oprator which gives type of values

// //Assingment opearators
// let c = 10+5;
// c += 10; //+= means   c = c +10
// c *= 10;
// c++ ;// c = c + 1
// c--; // c = c -1
// console.log(c);

// //Comparison Operators: to produce boolean values
// console.log(vaibhavAge > swayamAge); //> ,<,>=,<=
// console.log(vaibhavAge >= 18);
// const isFullAge = vaibhavAge >= 18;

//Operator precedence
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

// let x, y
// x = y = 25 - 10 - 5; //x = y = 10 x = 10
// console.log(x,y);

//Practice

//BMI = mass / (height * height)


//BMI = mass / (height * height)

// const  massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark)

// const BMIJohn = massJohn / (heightJohn * heightJohn)

// console.log(BMIMark)
// console.log(BMIJohn)

// const markHigherBMI = true;
// console.log(BMIMark > BMIJohn)

//5. Strings and Template Literals
// const firstName =  'Jonas';
// const job = 'Teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = 'I am' + firstName + ',a' + (year - birthYear) + 'year old' + job + '!';
// console.log(jonas);
// const jonasNew = `I'm ${firstName}`;
// console.log(jonasNew)

// console.log(`Just a regular string`)
// console.log(`String with \n\  multiple \n\ lines`)//to use in new multiple lines or multiline string

//6. Taking Decision: IF else statements //Control Structure
// const age = 13;
// // const isOldEnough = ;
// if (age >= 18) {
//   console.log('Sarah can start driving 🚗')
// } else {
//   console.log('Sarah cannot drive');
// }

// //dynamic variable
// const birthYear = 1998;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21
// }

// console.log(century)

//7. Type Conversion and Coercion
//Type conversion means when we manually convert type to another where as type coercion is when js automatically converts type bts for us.

const inputYear = '1991';
console.log(Number(inputYear))
console.log(inputYear + 18);// to fix this we can use inbuilt js Number() fn.