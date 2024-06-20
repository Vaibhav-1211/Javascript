'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thus', 'fri', 'sat', 'sun'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //Enhanced Object Literals
  openingHours,


  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ time = '20:30', address, mainIndex = 0, starterIndex = 1 }) {//did destructuring here,
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },//called this function here,

  //adding more methods
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`);
  },

  //method to order pizza
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }


};




//this the way of calling of object with method

restaurant.orderDelivery({
  time: '22:30',
  address: 'Vie del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
})

//Destructuring Objects
//means displaying data as i wanted that is destructuring.

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// //Setting a default values.
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variable
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //Nested Objects
// const { fri: { open: o, close: c } } = openingHours;
// console.log(o, c);


//Destructuring arrays
//without applying destructuring
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// //With destructuring
// const [x, y, z] = arr; //it is destructuring assignment
// console.log(x, y, z);

// console.log(arr);


// let [main, , secondary] = restaurant.categories;//If we add empty value that it will skip that position and consider the next value as second.
// // // const [first, second] = restaurant.categories;
// // console.log(main, secondary);

// //Switching variables
// //const temp

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //
// // console.log(restaurant.order(2, 0));



// //now with destructuring
// //Receive 2 return values from a function.
// const [stater, mainCourse] = restaurant.order(2, 0);
// console.log(stater, mainCourse);


// //with nested arrays //Nested destructuring
// const nested = [2, 4, [5, 4]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default Values
// // const [p, q, r] = [8, 9];
// // console.log(p, q, r);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
//this is destructuring inside destructuring


//--------->Spread Operator
//It is used to expand an array into all its elements or unpacking all array elements in one.

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);//it writes them individually. like writing them 1,2

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
//Big difference between array destructuring and spread operator is that spread operator takes all elements from the array also doesn't create new variables.

//Tew important useCases of spread operaotors 1.create shallow copies of arrays and 2.merge 2arrays together.

//Copy Arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(...menu);

// //Spread operator works on all Iterables. they things like all arrays, strings, maps or sets but not objects.
// const str = 'Jocob';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(letters);
// console.log(...str);
// console.log(`${...str} ggg`);//it only works in when we are on function or using arrays.


//
// const ingredients = [prompt('Let\'s make pasta!Ingredients 1?'), prompt('Ingredients 2'), prompt('Ingredients 3')];

// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);//Always go with this modern way ES6

//Since 2018, spread operator also work on objects even though they are not iterable.

//objects
// const newRestaurant = { foundedIn: 2000, ...restaurant, founder: 'Gusappe' };
// console.log(newRestaurant);
//Since we can do the shallow copies of an array with spread operator.
//We can also do with objects

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//---->Rest Pattern and Parameters
//Rest is to pack element into an array.

//1)Destructuring
//Spread, because on Right side of = assignment
// const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of = assignment
//SPREAD expand with REST Compress
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto.otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//2) Functions
//passing multiple arguments into function all at the same time
//RESt syntex taking multiple number or values and then packes them in one array
//Example:
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 5, 3, 2, 1);
// add(9, 2, 1, 5, 2, 5);

// const x = [23, 5, 7];
// add(...x);

// //order pizza
// restaurant.orderPizza('mushrooms', 'onion', 'Paneer')
// restaurant.orderPizza('mushrooms')

//Note: Spread and REST operator looks like same but work opposite.

//---->Short Circuiting (&& AND ||)

// //Use ANY data types, return ANY data type, short-circuiting.
// //OR || operator
// //here short circuiting means if the first value is truthy than it will considered that value and not move forward to see other value after or operator.
// console.log('-----OR-----');
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'HELLO' || 23 || null);

// restaurant.numGuests = 23;//if this will be set to 0 than it will selects the 2nd value.
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// //-------AND operator
// console.log('------AND-------');
// //here AND operator short circuit when first value is falsy value and did not even evulate further value.
// console.log(0 && 'Jonas');
// console.log('Hello' && 23 && null && 'Jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza
//   ('mushrooms', 'spinach');


//------>The Nullish Coalescing operator (??)

// restaurant.numGuests = 0;
// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

//Nullish: null and undefined (NOT 0 or ' '),it worked with concept of nullish values instead of falsy value.
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//------->Logical Assignment Operators
const res1 = {
  name: 'Capri',
  numGuests: 0,
};

const res2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//1. OR assignment operator it assign to value to the variable if variable currently falsy.

// res1.numberGuest = res2.numberGuest || 10;
// res2.numberGuest = res2.numberGuest || 10;
// res1.numberGuest ||= 10;
// res2.numberGuest ||= 10;

//2. Nullish Assignment operator(null or undefined)
res1.numberGuest ??= 10;
res2.numberGuest ??= 10;
//In nutshell, the Nullish assignment operator assigns the value to a variable if that exact variable is currently nullish.


//3. AND Assiggment operator

// res2.owner = res2.owner && '<ANO>';
res1.owner &&= '<ANO>';
res2.owner &&= '<ANO>';
//this returns the 2nd value '<ANO>' due to short circuiting , even if the first value is truthy it returing the second value.
//The AND assignemnt operator does is to assign a value to variable if its currently truthy.
console.log(res1);
console.log(res2);


//---->

//---Looping Arrays: The for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }//old school way

//new way we can destructure it

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
//.entries() is an array which in each position contains a new array which contains the element and index no. of that element
//Returns the index no, and element itself.

//------>Enhanced Object Literals
//1. Any object which we want to use in another object we can simply right the name of that object in that particular object. 
//const obj1 = {}
//const obj2 = {obj1,}//like this'

//2.So, in ES6 We no longer need to create properties for the function expression 
//old way:
//property1:function(p1,p2){}

//ES6 or in modern way
//property(p1,p2){} here, in new Es6 we no longer need to add : and function keyword name we can directly use the property as function name.

//3.Now we can actually compute property name instead of having them writing down manually and literally 
//compute means just calculate

// const weekdays = ['mon', 'tue', 'wed', 'thus', 'fri', 'sat', 'sun'];

// const openingHours = {
//     [weekdays[3]]: {
//       open: 12,
//       close: 22,
//     },
//     [weekdays[4]]: {
//       open: 11,
//       close: 23,
//     },
//     [`day-${2+2}`]: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//--------->Optional Chaining (.?)

//old way
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//new way ES6
//With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);//here if such property before ?. exist then it will show that else returns undefined.

const days = ['mon', 'tue', 'wed', 'thus', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed'
  console.log(`On ${day}, we open at ${open}`);

}
//here if we want to use varible as property name we can use it with [] notation.

//Methods: optional chaining also indeed work for calling methods so essentially we can check if method exist.

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does exist');

//Arrays: It even works on arrays
//we can if an array is empty
const users = [
  {
    name: 'Jonas', email: 'jonas@g.com'
  }
]

//get the name of first element
console.log(users[0]?.name ?? 'user array empty');

//Looping Objects: Objects keys,Values,AND Entries.

//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);


let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);

//Entries Object
const entries = Object.entries(openingHours);

//[key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}





