'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = ' ';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}
displayMovements(account1.movements)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//---->Simple Array Methods
//So basically, they are functions attached to objects.
// So if we have array methods, that means that arrays themselves are also objects. And so these array methods are simply functions that are attached to all arrays that we create in JavaScript.

// let arr = ['a', 'b', 'c', 'd', 'e'];

//Slice method - with the slice method we can extract any part of the array but without changing the original array.
//BEGIN PARAMETER
// console.log(arr.slice(2));//it return new array or copy of array with extracted part.

// //END PARAMETER
// console.log(arr.slice(2, 4));//

// //NEGATIVE BEGIN PARAMETER
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// //It is easiest way to get last element of any array.

// //We can use slice method to simply create shallow copy of any array.
// console.log(arr.slice());
// //with spread also we can do same.
// console.log([...arr]);

//-------->SPLICE METHOD
// console.log(arr.splice(2));
//
//delete count
// arr.splice(-1)//deleting last element form an array similar to slice method
// arr.splice(1,2)
// console.log(arr);


//---->Reverse method
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);//it also mutate the orginal array or change the array

// //--->CONCAT method
// const letters = arr.concat(arr2)//concat method
// console.log(letters);
// console.log([...arr, ...arr2]);//concat method by using spread operator

// //----->JOIN method
// console.log(letters.join(' | '));

//Other methods like push(),pop(),shift(),unshift(),indexof(),includes()

//------>The new at Method
// const arr = [23, 11, 64];
// console.log(arr[0]);//older and traditional way to get elements.//[position 0]
// console.log(arr.at(0));//using at method to get element.//at(position 0)

// //Getting last array element
// //want to get last element of array and do not know the length of it.
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);//using slice method to get last element//here adding square bracates will make the similar output as above line of codes output.
// console.log(arr.at(-2));

// //at() method also works on strings
// console.log('Roman'.at(0));//Output :R

//------->LOOPING Arrays: For each loop

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   //to get current index here with using for of along with entries in [index,current array element]firsta value is index and second is current array element .
//   if (movements > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

//Definition: The forEach method calls this callback function in each iteration it will pass in the current element of the array as an argument.
//The ForEach method does is to loop over the array, and in each iteration it will execute this callback function here,
//Biggest difference between for of and for each loop is that you cannot use continue or break statement at all.!!
// console.log('----For Each-----');
// movements.forEach(function (mov, i, arr) {//we can use small version for movement,index,array
//   //here alway first (current array element then ,index)
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// })

//---->ForEach with Maps and Sets

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// //Map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// })

// //Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {//_ underscore is throwaway variable in js which means uneceserry
//   console.log(`${value}: ${value}`);
// })

//Creating DOM elements
