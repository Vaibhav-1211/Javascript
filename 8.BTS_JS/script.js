'use strict';

//Scoping in Practice
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);//firstName is not part of this function however it is a global variable which we have defined through scop chain we can access it in this function.

//   function printAge() {
//     let output = `${firstName},you are ${age},born in ${birthYear}`
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1995) {
//       var millennial = true;
//       const firstName = 'John'//js try to look in its current scope

//       //Reassigning outer scopes variable
//       output = 'New Output';
//       const str = (`Oh! You are a millennial, ${firstName}`);
//       console.log(str);

//       //Function are also blocked scope starting in ES6;
//       function add(a, b) {
//         return a + b;
//       }
//       console.log(add(2, 3))

//     }//created block scop
//     // str();//cannot access outside of the function
//     console.log(millennial);
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Roman';
// calcAge(1991);

//Hoisting and TDZ in Practice

//Variables 
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Functions
// console.log(addDeclaration(1, 2));//executed got 3 as output
// // console.log(functionExpr(1, 3));
// //error: Cannot access 'functionExpr' before initialization;
// console.log(addArrow(1, 3));
//Error: Cannot access 'addArrow' before initialization; //TDZ temporar deadzone

//Any variable declared with the var will be hoisted and set to undefined
//if we declared below function expression with var variable they will have the undefined and throw different error from const.

// function addDeclaration(a, b) {
//   return a + b;
// }

// const functionExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

//Example
// console.log(undefined);
// if (!undefined) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

//this keyword practice;
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);//point to undefined value means undefined to this function
// }
// calcAge(1991);

// //with arrow function

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);//showing window in this arrow function
//   //here arrow function uses its parent scope which is window 
// }
// calcAgeArrow(1980);

// //this keyword inside method.

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//   },
// };
// jonas.calcAge();

// //this keyword always points to the object that is calling the method.

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

//----->Regular function vs Arrow functions
// var firstName = 'Matilda'

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);//jonas object
//--------> Function inside of Method.
//Solution 1
// const self = this;//self or that
// const isMillenial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
//   // console.log(this.year >= 1981 && this.year <= 1996)
// }
// isMillenial();//As per the rules says that inside the even though regular function this keyword must be undefined.
//in other words rules clearly says that the regular function has to set this keyword undefined and that how "this" keyword works.
//Solution for this is use extra variable outside of the function //const self = this; //pre ES6 solution

//Solution 2
//   const self = this;//self or that
//   const isMillenial = () => {
//     console.log(this);
//     console.log(this.year >= 1981 && this.year <= 1996)

//   };//THIS IS WORKING BECAUSE HERE THIS KEYWORD USES ITS PARENTS SCOP //in other words an arrow function inherits the this keywords from his parents scop.
//   isMillenial();

// },

// greet: () => {
//   console.log(this)//window 'this'
//   console.log(`Hey ${this.firstName}`)
//   },//here inside this arrow fn, we are getting undefined because here 'this' keyword is window object and on window object there is no value like firstName that is why it showing the undefined.
// };
// jonas.greet();
// jonas.calcAge();
//Reason behind getting undefined is Fact that An arrow function does not get his this key it uses this keyword from its surroundings 

//Variable declared with var actually creates properties on global object. //var firstName = 'Matilda' 

//---->Arguments key words
// const addExp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExp(2, 5);
// addExp(2, 3, 5, 5, 6);//It is compelety legal to add more arguments they will not have a name they do exits  we can use them in functions.

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(1, 5, 6);
//So here in an arrow function we got the error argument now defined that means argument keyword do exist but in regular function it will not work in an arrow function.


//------->Primitive vs.objects (primitive vs. reference types)
//Primitives are number,strings, booleans,Undefined,Null,Symbol,Bigint.<- Primitive types
//Objects:Object literals,Array,Functions <- Reference types

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);//current age 31
// console.log(oldAge);//showing the age = 30

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);


//JS Engine => Call Stack and Heap
// call stack where all function are executed and heap where all objects are stored or memory.
//Therefor, the primitive types were store in the Call stack(thats where execution context run) and Reference types store in the Heap.

//-----> Primitives Vs. Objects in Practice

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference Type
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;//if we change the property on marriedJessica it will also change on Jessica as well.
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
// marriedJessica = {};

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice','Bob']
};//if we really wanted to copy this object we could use  function object.assign = mearge and return new one

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
//Object.assign only create shallow copy and not deep clone.
//deep clone would copy everything.

//changing in jessica adding family members
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:',jessica2);
console.log('After marriage:',jessicaCopy);//here this object is now real copy of the original. so all properties are copied from one object to another.
//Both object have property call family and pointing to same object in memory heap which is array.

