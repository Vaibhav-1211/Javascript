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

const rest = new Map();
rest.set('name','Classic Italiano');
rest.set(1,'Dimond,Itely');
console.log(rest.set(2,'Lisbon, Portugal'));