"use strict"

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
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

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Coding Challenge Part 1

// //1.Create one plyer array for each team (variables 'players1 and players2)

// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// //2. 
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3.Create an array 'allPlayers' containing all players of both teams(22 players)
// // const [...allPlayers] = game.players;

// const allPlayers = [...players1, ...players2]
// console.log(allPlayers);


// //4.
// // const substitutePlayer = ['Thiago', 'Coutinho', 'Peristic'];
// // const players1Final = [substitutePlayer[0], substitutePlayer[1], substitutePlayer[2], ...players1]

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Peristic']
// console.log(players1Final);


// //5.
// //can be achive through nested destructuring
// const { odds: { team1, x: draw, team2 } } = game;
// console.log(team1, draw, team2);

// //6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored `);
// }
// // printGoals('Davis', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davis', 'Muller');
// printGoals(...game.scored)

// //7.
// team1 < team2 && console.log('Team1 is more likely to win!');
// team1 > team2 && console.log('Team2 is more likely to win!');

//---Looping Arrays: The for-of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// // for (const item of menu.entries()) {
// //   console.log(`${item[0] + 1}: ${item[1]}`);
// // }//old school way

// //new way we can destructure it

// for (const [i,el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
//.entries() is an array which in each position contains a new array which contains the element and index no. of that element 

//Coding Challenge Part2

//1. 
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// //2.
// const odds = Object.values(game.odds)
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// //3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;//to access the team property from game []
//   console.log(`Odd of ... ${teamStr} ${odd}`);
// }

//---->Sets: Is a basically just a collection of uniq values so that means sets cannot have duplicate values.

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('Joans'));

// console.log(ordersSet.size);
// //.has() is method 
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// //add() method to add
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');

// //delete() method
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// //clear()
// // ordersSet.clear();
// // console.log(ordersSet);


// //In sets there is no Index
// //Whether the certain value is in the Set or not and thats why we have has() method 
// //Sets are also iterable.So we can loop over them.

// for (const order of ordersSet) console.log(order);

// //Example:
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// //spread op = (...unpack things)
// //(...packthings) = pack everything
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// //Now we only wanted to know that how many different positions are there size() property is very useful

// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

// //Counting how many different letters in a string and string is also iterable.
// console.log(new Set('Vaibhav').size);

//hence Sets are not intedent to replace array 
//So whenever we need to store values in order and that might contains duplicates always just use arrays. Because arrays has access to lot arrays method.

//----->Map Fundamentals
//In javascript Map is data structure that we can use to map values to keys. Just like an in object data is stored in key:value pair in Maps.
//It can has any type

// const rest = new Map();
// rest.set('name', 'Classic Italiano');
// //here, set method is pretty similar to add method that i used in previous Set() method
// rest.set(1, 'Dimond,Itely');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')//boolean keys true and false
//   .set(false, 'We are closed :( ')

// //getting values from the set()
// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));


// console.log(rest.has('categories'));
// rest.delete(2); console.log(rest);
// const arr = [1, 2];
// rest.set(arr, 'Test')
// console.log(rest);


// //maps also has the size property
// console.log(rest.size);

// //clear() property to clear everything on map
// // rest.clear();

// //We can use arrays or object as map keys.
// // rest.set([1,2],'Test')
// console.log(rest.get(arr));

// //------>Maps Iterations
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct YO!'],
//   [false, 'Try again!'],
// ]);

// console.log(question);
// // console.log(question.get(1));
// // console.log(question.get(true));

// //Convert Object to Map
// console.log(Object.entries(openingHours));

// //this is arrays on arrays
// const hoursMap = new Map(Object.entries(openingHours))
// console.log(hoursMap);

// //Maps are also iterable so for loop is also available for it.
// //Quiz App
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// //Convert map to array
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

//Built-in Data structures Arrays , SETS , OBJECTS
//----when to use what Data structure?


///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);


// //2.
// // console.log(gameEvents.delete(64));

// //3.
// const minutes = 90;

// // 3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// // const time = [...gameEvents.keys()].pop();
// // console.log(time);
// // console.log(
// //   `An event happened, on average, every ${time / gameEvents.size} minutes`
// // );

// // 4.
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }


/////////////////////////////////////////

///--->Strings Part-1

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B789'[0]);

// console.log(airline.length);
// console.log('B789'.length);//here we can directly read the legnth of the string.

// //We can get a certain position in which over string is.
// console.log(airline.indexOf('r'));//output 6//forward searching
// console.log(airline.lastIndexOf('r'));//backward searching
// console.log(airline.indexOf('Portugal'));//case sensitive //find the index of whole word.

// //Extracting parts using slice method and it needs indexes as an arguments
// //slice()
// console.log(airline.slice(4));//Air Portugal it is sub part of the original string which means it is a sub string. 

// console.log(airline.slice(4, 7));//end - start.

// console.log(airline.slice(0, airline.indexOf(' ')));//extracting the first word
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));//extracting the last index or word

// console.log(airline.slice(-2));//applied -ve value so it will start counting from the end or extracting string from the end

// console.log(airline.slice(1, -1));//cuts the first and last alphabet from the string

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1)
//   if (s === 'B' || s === 'E')
//     console.log('You got the middle seat Yo!');
//   else
//     console.log('You got lucky YOO!');
// }//to extract part of the string we use slice() method

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

//BTS how methods on strings workds:
// JavaScript is really smart.

// And so here is how this works.

// Whenever we call a method on a string,

// JavaScript will automatically behind the scenes

// convert that string primitive to a string object

// with the same content.

// And then it's on that object where the methods are called.

// All right and this process is called boxing

// because it basically takes our string

// and puts it into a box

// which is the object.

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));//this indeed now an object

// console.log(typeof new String('jonas').slice(1));

// //Working with strings P2

// console.log(airline.toLocaleLowerCase());//transform the whole string to lowerCase
// console.log(airline.toUpperCase());//transform the whole string to upperCase

// //Fix capitalization in name
// const passenger = 'jOnAs';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //Comparing Emails
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// //trim() method is used to remove any leading and tralling white space from a string.
// //the trim() method is used to remove the spaces at the beginning and end of the string.

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //Replacing 
// //.replce() replace the orginal string with new given string 
// //.replaceAll() replaceALL replace all selected string with new string 
// //replace() is also caseSensitive
// const priceGB = '288,97P';
// const priceUS = priceGB.replace('P', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'ALL passenger come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// //regular expression
// //-> /string/ between this slashes are called regular expressions and g means global.
// console.log(announcement.replace(/door/g, 'gate'));

// //Boolean
// //includes() 
// const planee = 'Airbus A320NE'
// console.log(planee.includes('A320'));//includes() checks wethaer the given string is present or not if yer returns boolean value true or false

// //startswith()
// console.log(planee.startsWith('Air'));//check the starting string occurance if it matches then returns the booleans value true or false

// //endsWith()
// if (planee.startsWith('Airbus') && planee.endsWith('NE'))
//   console.log('Part of the new AirBus family');
// else 
//   console.log('Not a part of the AirBus family');


// //Practice exercise
// const checkBaggage = function(items){
//   const baggage = items.toLowerCase();
//   if(baggage.includes('knife') || baggage.includes('gun'))
//     console.log('Not Welcome onBoard.');
//   else
//     console.log('Welcome aboard!');
// };
// checkBaggage('I have some food and pocket knife to cut fruits')
// checkBaggage('I have one camera to click pictures');
// checkBaggage('I have tripod,laptop and sunglsses');

//----> Working with strings Part 3
//Split() and Joint ()

//split(): allows to split the strings into multiple parts based on divider strings

// console.log('a+very+nice+string'.split('+'));//+ is divider string which split up the strings by '+' sign  and then it will store the result into the elements of new array
// //output: ['a', 'very', 'nice', 'string']    

// console.log('Jocob Scchasn'.split(' '));

// //now with the destructring 
// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// //join(): it will join the any with string anything we pass into that join string here it join the space if add the - it it will add them instead of white space

// const newName = ['MR.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('Jessica ann smith davis');
// capitalizeName('Jonas Schmedtmann');

// //---> Padding a string : means to add number of characters to the strings until the string has certain desired length

// //Padding
// const message = 'Go to gate 23';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
//padStart takes the number of values like above('25','+') and adding values and than matches the length or return that amoubt of string character - to the number value passed to the strings
// output:++++++++++++Go to gate 23

//padEnd(): add values at the end of the string but it count from the padStart than add the remaining values as per pass to the string

// console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// //Example real world
// const maskCreditCard = function (number) {
//   const str = number + ' ';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// }
// console.log(maskCreditCard(43875758));
// console.log(maskCreditCard('4961434'));

// //Repeat method
// const message2 = 'Bad wether ...All departure Delayed';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(19);
// planesInLine(12);

//--->Coding  Challenge #4
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

//Solution

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

//String Method Practice
///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}




