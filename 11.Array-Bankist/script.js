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
        <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  })

  //--------->Filter Method
  //filtering the positive value
  //here (i,arr) optional in case of we need them to use in code
  const deposits = movements.filter(function (mov, i, arr) {
    return mov > 0;
  })

  console.log(movements);
  console.log(deposits);

  //for of loop
  const depositsFor = [];
  for (const mov of movements) if (mov > 0) depositsFor.push(mov)
  console.log(depositsFor);

  //Withdrawl
  const withdrawal = movements.filter(function (mov) {
    return mov < 0;
  })
  console.log(movements);
  console.log(withdrawal);

  //withdrawal arrow funciton
  const withdrawalArrow = movements.filter(mov => mov < 0);
  console.log(withdrawalArrow);

  //In all call back function contains this-> current element,current index,entire array

  //The Reduce Method
  //it also contains accumulator -> is like snowball
  //The accumulator parameter is the single value that will be returned by the reduce() method. It will contain the value returned by the callback function in each iteration. The item parameter is simply the item from the array, which will change in each iteration just like in the forEach() method.

  console.log(movements);

  // const balance = movements.reduce(function (accum, currElem, currI,) {
  //   console.log(`Iteration ${currI}: ${accum}`);
  //   return accum + currElem //in each loop itration we keep adding in the next itration
  // }, 0);//initial value (jo bhi value inital value rahegi usme + next hoke loop badhta rahega for next itration like yaha per if 100 hota then 100 is first value then + currElem or array value )

  //Using Arrow function
  const balance = movements.reduce((accum, currElem, currI) => accum + currElem, 0
    // console.log(`Iteration ${currI}: ${accum}`);
  );

  console.log(balance);
  let balance2 = 0;
  for (const mov of movements) balance2 += mov;
  console.log(balance2);

  //Finding the Maximum value using reduce
  const max = movements.reduce((accum, mov) => {
    if (accum > mov)
      return accum;
    else
      return mov;
  }, movements[0])
  console.log(max);
}

displayMovements(account1.movements)

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((accum, mov) => accum + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements.filter(mov => mov < 0).reduce((accum, mov) => accum + mov, 0);

  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposits => deposits * acc.interestRate / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    }).reduce((accum, int) => accum + int, 0);

  labelSumInterest.textContent = `${interest}€`
}
// calcDisplaySummary(account1.movements)

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((accum, mov) => accum + mov, 0);
  // acc.balance = balance;
  labelBalance.textContent = `${acc.balance} €`
};
// calcDisplayBalance(account1.movements);

//Create user 
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  });
};

createUsernames(accounts)

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements)
  //Display Balance
  calcDisplayBalance(acc)
  //Display Summary
  calcDisplaySummary(acc)
}

//Event handlers //User Login

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  console.log(currentAccount);

  //?optional chaining
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    // console.log("LOGIN");
    labelWelcome.textContent = `Welcome back,${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    //UpdateUI
    updateUI(currentAccount)
  };
})

//Implementing transfers money from one user to another
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault()//to by default reload the page when user clicks on the button
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = ' ';

  // receiverAcc &&
  if (amount > 0 && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
    // console.log('Transfer Valid');
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //UpdateUI
    updateUI(currentAccount)
  }
});

//------->Request Loan ------>
btnLoan.addEventListener('click', function (e) {
  e.preventDefault()
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    currentAccount.movements.push(amount);

    //Upadate UI
    updateUI(currentAccount)
  }//amount * 0.1
  //Add Movement
  inputLoanAmount.value = '';
})


//------->Closing account means deleting the object
//Splice method to delete the account
//findIndex method------------>

btnClose.addEventListener('click', function (e) {
  e.preventDefault();


  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);

    //indexOf(23)
    //delete 
    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';

})

//------>computing username using for each and map method

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]
//     ).join('');
//   });
// }
// // const user = 'Steven Thomas Williams';//stw


// // console.log(createUsernames(accs));
// createUsernames(accounts);
// console.log(accounts);





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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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


//Coding Challenge

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.splice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   //dogsJulia.slice(1,3);
//   console.log(dogsJuliaCorrected);
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 14, 15, 8, 3])

//Data transformation with MAP,FILTER, AND REDUCE
//Map:we can use to loop over the arrays. It similar to for each method but the difference is that map create a brand new array based on original array.Map method takes an array loops over that array and each iteration it applies call back function that we specifies in our code to the current array element.

//Filter:is used to filter for elements in the original array which satisfy a certain condition.

//Reduce:  use to boil down all the elements of the original array into one single value.

//-->--->THE MAP 
//Euro to USD conversion
// const euTOUsd = 1.1;

// const movementUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// console.log(movements);
// console.log(movementUsd);

//Using arrow function
// const movementUsd = movements.map( mov => mov * eurToUsd)

//For of loop
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * euTOUsd);

// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i, arr) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`
// );
// console.log(movementsDescriptions);

//Computing the username using for each and map method

//----->Coding challenge 2:

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
//   const adults = humanAges.filter(age => age >= 18)
//   console.log(humanAges);
//   console.log(adults);

//   // const average = adults.reduce((accum, age) => accum + age, 0) / adults.length;

//   //property of average for ex; avg of 2 and 3 (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

//   const average = adults.reduce((accum, age, i, arr) => accum + age / arr.length, 0);

//   return average;


// }
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
// console.log(avg1, avg2);

//The magic of Chaining method
const eurToUsd = 1.1;

//PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd
  })
  // .map(mov => mov * eurToUsd)
  .reduce((accum, mov) => accum + mov, 0);
console.log(totalDepositsUSD);
//we can only chain a method after another one if the first one returns an array.
//So, here we can not chain any more because reduce do not does the same or returns an array.


// Coding Challenge 3 write the same C2 challenge in arrow function

const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
  const adults = humanAges.filter(age => age >= 18)
  console.log(humanAges);
  console.log(adults);
  const average = adults.reduce((accum, age, i, arr) => accum + age / arr.length, 0);

  return average;
}

const calcAverageHumanAge = ages => ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4))
  .filter(age => age >= 18)
  .reduce((accum, age, i, arr) => accum + age / arr.length, 0);


const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
console.log(avg1, avg2);

//----------->Find method
//We can use find method to retrive one element of an array based on condition
//Find is the just another method which loops over the array 
//Unlike filter method the find method don't returns the new array but it will only returns the first element from the array which satisfy the condition

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
//Finding the object using the Find method 
const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(account);

//Implementing transfers money from one user to another
//---------->FindIndex method------------------>
//FindIndex method works almost same as the find method but as name says findindex returns the index of the found element but not the element itself.

//----->Some and Every ------------------>
//Some method is used to test for condition
console.log(movements);

//Equality
console.log(movements.includes(-130));

//SOME:Condition
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

//EVERY: It is similar to some method difference is that it only returns true if all of the element in array satisfy the condition that we passed in.
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Separate call back
const deposit = mov => mov => 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


//----->Flat and flatMap
//---->it flatten the nested array like 1,2,4, etc that is why it call flat method
//it only goes 1 level deep to flat the array

const arr = [[1, 2, 3], , [4, 5, 6], 7, 8];
console.log(arr.flat());


const arrDeep = [[[1, 2], 3], , [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

//
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//By using Chaining method
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

//flatMap
//flatmap() method combined the both map and flat method for better performance.
//it also similar as flat which goes one level deep to flatten the results.

const overalBalance2 = accounts
  .flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
// .flat()

console.log(overalBalance2);



