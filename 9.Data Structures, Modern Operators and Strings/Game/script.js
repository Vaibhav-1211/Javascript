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
