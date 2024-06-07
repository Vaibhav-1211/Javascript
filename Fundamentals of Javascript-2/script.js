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

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }

// const yearUnitRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear)
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`)
//     return retirement;//return keyword immidietly exit the function  after returning the value;after that function is done.
//   } else {
//     console.log(`${firstName}has already retired .`)
//     return 0
//   }
//   // return retirement;
//   // return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearUnitRetirement(1991, 'Joker'))

// console.log(yearUnitRetirement(1997, 'Joker'))
// console.log()

// //Code Challenge.
// const calcAverage = (a, b, c) => (a + b + c / 3)
// console.log(calcAverage(3, 4, 5));

// //Test 1
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);

//6.-------> Arrays
// const friends = ['Joey', 'Rachel', 'Chandler', 'Ross', 'Phoebe', 'Gunther']
// console.log(friends);

// //Another way to write which used most | instead of bracates we can write new keyword and doesn't need to be string it can store as many as value in an array | here Array() calling function because we are using parenthesis here.
// const years = new Array(1991, 1994, 1995, 1996, 2000);
// console.log(friends[0]);

// console.log(friends.length);

// //we can use this to get last element of an array automatically
// console.log(friends[friends.length - 1])

// //<mutating the array or in other words no longer need of one the friends of an array.

// friends[2] = 'Jay Uso';
// console.log(friends);

// //Array can hold all the different values at the same time.
// const firstName = 'Jonas';
// const jonas = [firstName, 'Patel', 2037 - 1991, friends]
// console.log(jonas);

// //Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }
// const year = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(year[0]);
// const age2 = calcAge(year[1]);
// const age3 = calcAge(year[year.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])];
// console.log(ages);

//Javascript has some builtin function that we can directly apply on arrays
//Basic Array operation (methods)


//--->Add elements
//Push method adds the element to the end of the array and also return the length of the array
// const friends = ['Joey', 'Chandler', 'Monica'];
// friends.push('Ross')
// console.log(friends)

// //Unshift method which add element at the begining of the array and also return the length of the array

// friends.unshift('Rachel Green');
// console.log(friends)

// //Remove elements
// //pop method 
// const popped = friends.pop();//last element will be removed 
// console.log(popped)
// console.log(friends)  //it does not returned the length of the array but return the removed elements

// //Shift method
// friends.shift();
// console.log(friends) //similar to pop it returned the removed element

// //index of //return the element position where it is placed //returned the position

// console.log(friends.indexOf('Chandler'));//if elemet found then it will returned that element other wise returned -1.

// //include method either retured the true or false value by searching the element from an array

// friends.push(23);
// console.log(friends.includes('roman'));

// console.log(friends.includes('Seth'));
// console.log(friends.includes('25'));

// if (friends.includes('Roman')) {
//   console.log('You have friend called Roman');
// }

// //Coding Challenge 
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// calcTip(bills[2]);
// const totals = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
// console.log(bills, tip, totals);


//Introduction to an Object
//key:value pair //here key is variable name //here object has 6 properties 

// const jonasArray = [
//   'Jonas',
//   'Patel',
//   2037 - 1991,
//   'BusinessMan',
//   ['Harsh','Rajiv','Jay']
// ];


// const jonas = {
//   firstName: 'Vaibhav',
//   lastName: 'Kabira',
//   age: 2037 - 1991,
//   job: 'Wrestler',
//   friends: ['Roman', 'Seth', 'Solo']
// };
// console.log(jonas)

// //Dot. vs Bracket Notation
// console.log(jonas.lastName)
// console.log(jonas["lastName"]);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);
// // console.log(jonas);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName,lastName,age,job, and friends');
// // console.log(jonas.interestedIn);

// //undefined: When we try to access the property on object that does not exits

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log('Wrong Request! Choose between firstName,lastName,age,job, and friends');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@johncena';
// console.log(jonas);

// //Challenge 
// //'jonas has 3 friends and his best friend is called Roman

// console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friends is ${jonas.friends[0]}`)

//---->Object Methods 

// const jonas = {
//   firstName: 'Vaibhav',
//   lastName: 'Kabira',
//   birthYear: 1991,
//   job: 'Wrestler',
//   friends: ['Roman', 'Seth', 'Solo'],
//   hasDriverLicense: true,

//   // calcAge: function(birthYear){
//   //   return 2037 -  birthYear;
//   // }

//   // calcAge: function(){
//   //   console.log(this)//we can access object property by using this keyword
//   //   return 2037 -  this.birthYear;
//   // }

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;//with the use of this keyword we can also add new property into the object. or we can do this without the this keyword to but in different above given way.
//     // return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} old ${this.job} and has ${this.hasDriverLicense ? 'a' : 'not'} driver's license.`
//   }
// };

// //Any function that attache to an object is called the Method.

// console.log(jonas.calcAge());
// console.log(jonas.age);//simply retriving the property that we have already called.
// console.log(jonas.age);

// //Challenge time;
// //Jonas is a 46-year old wrestler and he has a drivers licence. and he has no driver license


// // if(jonas.hasDriverLicense > 18){
// //   console.log(`${jonas.firstName} is a ${jonas.calcAge()} old ${jonas.job} and he has a driver license!`)
// // }else if(jonas.hasDriverLicense < 18){
// //   console.log(`${jonas.firstName} is a ${jonas.calcAge()} old ${jonas.job} and he has not a driver license!`)
// // }

// // console.log(`${jonas.firstName} is a ${jonas.calcAge()} old ${jonas.job} and ${jonas.hasDriverLicense === true ? 'he has a driver license' : 'has a not driving license!'}`)

// console.log(jonas.getSummary())

//---->Iteration: The for Loop

//for(initial value or declaration;condition;iteration);
//for loop keep running until condition is TRUE;

// for (let rep = 1; rep <= 10; rep++) { //rep = rep + 1 is similar to write right the rep ++ increment operator.
//   console.log(`Lifting weights repetition ${rep} 💪`)
// }

//in order to not to repeat same code again and again we use for loop

//---->Looping Arrays, Breaking and Continuing
//looping through an arrays is most used application 

// const jonas = [
//   'Jonas',
//   'Patel',
//   2037 - 1991,
//   'BusinessMan',
//   ['Harsh', 'Rajiv', 'Jay'], true
// ];

// const types = [];

//How we want to print the data
// console.log(jonas[0])
// console.log(jonas[1])
//...
// console.log(jonas[2])
//jonas[5] does not exist



// for (let v = 0; v < 5; v++) {
//   console.log(jonas[v]);
// }
// for (let v = 0; v < jonas.length; v++) {
//   //Reading from jonas array
//   console.log(jonas[v], typeof jonas[v]);

//   // Filling types array--->{1st way to doing adding elements into the array}
//   // types[v] = typeof jonas[v];

//   //push method -> typeof array at position [v]
//   types.push(typeof [v]);

// };

// console.log(types);
// //Right now we are just reading the value of loop of an array

// //2nd Example
// const year = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < year.length; i++) {
//   ages.push(2037 - year[i]);
// };
// console.log(ages);

//---->2 important statements about loops

//Continue and break
//with Continue we can exit the current iteration of the loop.
//continue; keyword just
// console.log('---- Only Strings ----')
// for (let v = 0; v < jonas.length; v++) {
//   if (typeof jonas[v] !== 'string') continue;//it only show the string value.

//   console.log(jonas[v], typeof jonas[v]);
// };

// //how the break works => it completely terminate the whole loop

// console.log('---- Break with number ----')
// for (let v = 0; v < jonas.length; v++) {
//   if (typeof jonas[v] === 'number') break; 

//   console.log(jonas[v], typeof jonas[v]);
// };

//Loop Backwards and Loop in loops.

// const jonas = [
//   'Jonas',
//   'Patel',
//   2037 - 1991,
//   'BusinessMan',
//   ['Harsh', 'Rajiv', 'Jay']
// ];

//initially looped from starting like 0,1,2...4
//Now backwards loop means 4,3,2,1

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// };

//How to create loop inside of loop
//3 exercises and each 3 exercise have the 5 reps of lifting weights.

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------Exercise ${exercise}`);

//   for(let rep = 1; rep < 6; rep++){
//     console.log(`Exercise ${exercise}: Lifting weight repetation ${rep} 💪`);
//   };
// };

// for (let star = 1; star < 6; star++) {
//   console.log(`*`)
//   for (let pattern = 1;pattern < star; pattern++ ){
//     console.log(`* `);
//   }
// }

//Print star patterns.
// function printRightTriangleUpwards(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let stars = "";
//     for (let j = 1; j <= i; j++) {
//       stars += "*";
//     }
//     console.log(stars);
//   }
// }

// printRightTriangleUpwards(5); // Output:
// *
// **
// ***
// ****
// *****



// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Yo Light weight baby ${rep}`);
// }
//The while loop

//while(condition){
//}

// console.log(`-----While Loop`)
// // let reps = 1;
// // while (reps <= 10) {//while this condition got true
// //   console.log(`Yo Light weight baby ${reps}`);
// //   reps++
// // }

// //Counter depends on random number
// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...')
// }
//whenever when we do need without counter while loop is best choice!

//Coding challenge

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

//Average 
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum = sum + arr[i];
    sum = sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 6]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));