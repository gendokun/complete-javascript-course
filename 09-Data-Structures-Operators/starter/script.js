'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

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
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery(obj) {
    console.log(obj);
  },
  orderPizza(mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
  },
};

//////////////// MAPS ////////

// const question = new Map([
//   ['question', 'What is the best programming language in the world ?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'try again'],
// ]);

// console.log(question);

// // Convert Object to Map

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// // const answer = Number(prompt('Your answer'));
// const answer = 3;

// console.log(question.get(answer === question.get('correct')));

// //Convert Map to array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

/*
//////////// MAPS FUNDAMENTALS //////////////////////////

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'we are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
rest.set([1, 2], 'Test');
console.log(rest);
// console.log(rest.clear());
console.log(rest.size);

rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);

*/

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');

// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example (removing stuff from Arrays)

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)]; // Array out of Set = removed duplicates
// console.log(staffUnique);

// console.log(new Set(staff).size);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   // console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// // console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// // console.log(restaurant.orderRisotto?.('1,2') ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Peter', email: 'existent@existent.com' }];

// // console.log(users[1]?.name ?? 'User Array Empty');

// //Property names
// for (const day of Object.keys(openingHours)) {
//   // console.log(day);
// }

// // Property Values

// const values = Object.values(openingHours);

// //Entire Object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
// console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// const str = 'abc';

// // for (const item of menu) console.log(item);

// for (const item of menu.entries()) console.log(item);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Straße 2',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner &&= 'Anonymous';
// rest2.owner &&= 'Anonymous';

// console.log(rest1, rest2);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const x = ['mushroomi', 'onioni'];

// restaurant.orderPizza('mushrooms', x);
// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
//   menu: menu = [],
// } = restaurant;
// console.log(restaurantName, openingHours, tags);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);

// const {
//   fri: { open, close },
// } = openingHours;

// const arr = [2, 3, 4];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// [secondary, main] = restaurant.order(2, 0);
// console.log(main, secondary);

// const nested = [2, 4, [5, 6]];

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const scorers = game.scored.entries();
// const scorersall = [...scorers];

/*
1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

*/

// 1. Create one player array for each team (variables 'players1' and 'players2')

// const [players1, players2] = [game.players[0], game.players[1]];

// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

// const [gk, ...fieldplayers] = players1;

// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)

// const allplayers = [...players1, ...players2];

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

// const { team1, x: draw, team2 } = game.odds;

// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// const printGoals = function (...players) {
//   for (let i = 0; i < players.length; i++) {
//     console.log(`${players[i]}`);
//   }
//   console.log(`${players.length} Goals were scored`);
// };

// printGoals(...game.scored);

// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// team1 < team2 && console.log('Team 1 is more like to win');
// team1 > team2 && console.log('Team 2 is more like to win');

// for (const [goal, scorer] of game.scored.entries()) {
//   console.log(`Goal ${goal + 1}: ${scorer}`);
// }

// // 2. Odds

// const oddsarray = Object.values(game.odds);

// const logOddAverage = function () {
//   let sum = 0;
//   for (let i of oddsarray) {
//     sum += i;
//   }
//   let average = parseFloat(sum / oddsarray.length).toFixed(2);
//   console.log(`The odds average is ${average}`);
// };

// logOddAverage();

// //3.

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;

//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// // const logOdds = function () {
// //   const { team1, team2, ...rest } = game;

// //   console.log(`Odd of victory ${team1}: ${oddsarray[0]}`);
// //   console.log(`Odd of draw: ${oddsarray[1]}`);
// //   console.log(`Odd of victory ${team2}: ${oddsarray[2]}`);
// // };

// // logOdds();

// //BONUS
// const scorers = {};

// for (const name of game.scored) {
//   scorers[name] = scorers[name] ? scorers[name] + 1 : 1;
// }
// console.log(scorers);

// for (const name of game.scored) {
//   console.log(name);
// }

/*
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")


2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)


3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/

//////////////////////////////////////
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

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//SOLUTION 1:
const events = [...new Set(gameEvents.values())];
console.log(events);

//SOLUTION 2:
gameEvents.delete(64);

//SOLUTION 3:
console.log(
  `An event happend, on average, every ${90 / gameEvents.size} minutes`
);

//SOLUTION 4:
for (let [key, value] of gameEvents) {
  if (key < 45) {
    console.log(`[FIRST HALF] ${key}:${value}`);
  } else {
    console.log(`[SECOND HALF] ${key}:${value}`);
  }
}
