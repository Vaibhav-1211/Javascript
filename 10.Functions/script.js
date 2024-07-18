'use strict';

//---->Default Parameters

// const bookings = [];

// const createBooking = function (flightNum, numPassenger = 1, price = 199 *1.2 ) {//cool thing about default values is that it contains calculations 

//   //ES5 way to set default values
//   // numPassenger = numPassenger || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// }

// createBooking('LH123')
// createBooking('LH123',2,800)
// createBooking('LH123',3,500)
// createBooking('LH123',4)

//----->How Passing Arguments works: VALUES  VS. REFERENCE

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 234555799,
// };

//creating check-in function
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 234555799) {
//     alert('Check-In made')
//   } else {
//     alert("Wrong PassPort!")
//   }
// }

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// //Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// }

// newPassport(jonas);
// checkIn(flight, jonas);

//two terms are used when dealing with functions 1.Passing by Refrence and 2.Passing by value
//So JavaScript only has passing by value it doest not have passing by reference even though other languages like c++, java has the both

//---->First-Class AND HIGHER-ORDER FUNCTION

//->Javascript treats functions as first-class citizens.
//->This means that function are simply values.
//->Function are just another 'type' of object.

//-->Higher-Order functions
//->A function that receives another function as an argument, that returns a new function, or both
//-> this is  only possible because of first class function.

//---> Functions Accepting Callback Functions
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher Order FUnction
// const transformer = function (str, fn) {
//   console.log(`Original strings: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is best!', upperFirstWord)
// transformer('JavaScript is best!', oneWord)

// //JS uses the callback all the time!!
// const high5 = function () {
//   console.log('YO!');
// }

// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5)


//---->Function returning Functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   }
// }

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas')

// //Challenge time
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Jonas')

//----> The Call AND Apply Methods
// const lufthansa = {
//   airLine: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(name, flightNum) {
//     console.log(
//       `${name} booked a seat on ${this.airlines} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flights: `${this.itaCode}${flightNum}`, name })
//   }
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(484, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   name: 'Eurowings',
//   itaCode: 'EW',
//   bookings: []
// };

// const book = lufthansa.book;//it no more the method in now the regular function call
// book(23, 'Sarah Williams');

//Function call methods
//here call method allows us to manually and expelicitly set this keyword of any function that we want to call.
// book.call(eurowings, 23, 'Sarah williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Marry Cooper');
// console.log(lufthansa);

// const swiss = {
//   airlines: 'Swiss Air lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

//Apply Method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

//Doing it in modern way without using Apply methods
// book.call(swiss,...flightData)


//----bind() method
//Bind also allow us to manually set the this keywords for any function call. Bind does not immedietly call the fn instead it returns new function where this keyword is bound 

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss)

// bookEW(32, 'Sweetie Patel');

// const bookEW32 = book.bind(eurowings, 32);
// bookEW32('Jonas Schmedtemann');
// bookEW32('Martha');

//With event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// //addVAT = value => value + value * 0.23;

// console.log(addVAT(199));

//Coding Challenge 1
// const poll = {
//   question: 'What is your favourite programming language?',
//   option: ['0:Javascript', '1:Python', '2:Rust', '3:C++'],
//   //This generates [0,0,0,0]. More in the next section
//   answer: new Array(4).fill(0),
//   registerNewAnswer() {
//     //Get answer
//     const answer = Number(prompt(`${this.question}\n${this.option.join('\n')}\n (Write option number)`));
//     console.log(answer);
//     //Register answer
//     typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
//     console.log(this.answers);
//   },
// };
// // poll.registerNewAnswer();

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
// //in event handler function the this keyword will always point to the element it has attached.


// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll results are 13, 2, 4, 1
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

//Immediately Invoked Function Expression (IIFE)
//In other words the which dissapears right after its function call

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// //IIFE
// (function () {
//   console.log('This will never run again');
// })();

// //with arrow function
// (() => console.log('this will ALSO never run again'))();

//------->Closures

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   }
// }

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

//A function has access to the variable environment (VE) of the execution context in which it was created.|| even after that execution context is gone.
// The closure is then basically this variable environment attached to the function, exactly as it was at the time and place that the function was created.

// A closure is the closed over variable environment of the execution context in which a function was created even after that execution context is gone.

//A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference  to its outer scope, which preserves the scope chain throughout time.

//A closure makes sure that function doesn't loose connection to varibles that existed at the function's birth place.

//A clousure is like a backpack that a function carries around wherever it goes. this backpack has all the varibles that were present in the enivironment where the function was created.


//Another Example
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 999;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

//Re-assign f function
h();
f();
console.dir(f);

//Example 3
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups,each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);