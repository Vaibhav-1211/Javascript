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
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher Order FUnction
const transformer = function (str, fn) {
  console.log(`Original strings: ${str}`);
  console.log(`Tranformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is best!', upperFirstWord)
transformer('JavaScript is best!', oneWord)

