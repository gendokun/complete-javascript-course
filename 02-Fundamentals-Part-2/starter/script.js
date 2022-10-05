'use strict';

// function describeCountry(country, population, capitalCity) {
//     const str = `${country} has ${population} million people and its capital city is ${capitalCity}`
//     return str
// };

// console.log(describeCountry("Germany", 84, "Berlin"));
// console.log(describeCountry("Finland", 6, "Helsinki"));
// console.log(describeCountry("Portugal", 33, "Lissboa"));

// const myCountry = {
//     country: "Germany",
//     capital: "Berlin",
//     language: "german",
//     population: 84,
//     neighbours: [],
//     checkIsland: function () {
//         if (this.neighbours.length === 0) {
//             this.isIsland = true;
//             return this.isIsland
//         } else {
//             this.isIsland = false;
//             return this.isIsland
//         };
//     },
//     describe: () => {
//         return `${myCountry.country} has ${myCountry["population"] - 2} million ${myCountry.language}-speaking people, ${myCountry.isIsland ? "no" : myCountry.neighbours.length} neighbourig countries and a capital called ${myCountry.capital}`
//     }

// };
// myCountry.checkIsland();
// console.log(myCountry.describe());


// console.log(`${myCountry.country} has ${myCountry["population"] - 2} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbourig countries and a capital called ${myCountry.capital}`);

// function logger() {
//     console.log("My Name is Peter");
// };

// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice
// };

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100
// }

// const percentageOfWorld2 = function (population) {
//     return population * 100 / 7900
// }

// const percentageOfWorld3 = population => population * 100 / 7900;


// const describePopulation = (country, population) => {
//     const percentage = percentageOfWorld1(population)
//     return `${country} has ${population} million people, which is about ${percentage} of the world`
// }


// console.log(describePopulation("China", 1441));


// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3
// const checkWinner = (average1, average2) => {
//     if (average1 >= 2 * average2) {
//         return `Dolphins wins (${average1} vs ${average2})`
//     } else if (average2 >= average1 * 2) {
//         return `Koalas win (${average2} vs ${average1})`
//     } else {
//         return "No team wins!"
//     }
// }

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

// // const avgDolphins = calcAverage(85, 54, 41);
// // const avgKoalas = calcAverage(23, 34, 27);

// console.log(checkWinner(avgDolphins, avgKoalas));


// const bill = 100;
// const tipOld = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;


// const calculateTip = (num) => {
//     if (num >= 50 && num <= 300) {
//         return num * 0.15;
//     } else {
//         return num * 0.2;
//     }
// };
// let tips = []
// const bills = [125, 555, 44]

// bills.forEach(element => tips.push(calculateTip(element)));


// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(calculateTip(bill));
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// const peter = {
//     firstName: "Peter",
//     lastName: "Häring"
// };

// console.log(peter.firstName);
// console.log(peter["lastName"]);


// const jonas = {
//     firstName: "Jonas",
//     friends: ["Michael", "Peter", "Steve"]
// }

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);

// const jonas = {
//     firstName: "Jonas",
//     birthYear: 1993,
//     job: "teacher",
//     driversLicense: false,
//     buildString: function () {
//         this.age = 2020 - this.birthYear;
//         this.summary = `${this.firstName} is a ${this.age}-year old ${this.job} and ${this.driversLicense ? "has a drivers license" : "has no drivers license"}`
//     }
// }
// jonas.buildString();
// console.log(jonas.summary)



// const mark = {
//     firstName: "Mark",
//     lastName: "Miller",
//     mass: 78,
//     height: 1.69,
//     calculateBMI: function () {
//         this.BMI = this.mass / this.height ** 2
//         return this.BMI
//     }
// };

// const john = {
//     firstName: "John",
//     lastName: "Smith",
//     mass: 130,
//     height: 1.95,
//     calculateBMI: function () {
//         this.BMI = this.mass / this.height ** 2
//         return this.BMI
//     }
// };
// john.calculateBMI();
// mark.calculateBMI();

// console.log(`${john.firstName} ${john.lastName}'s BMI(${john.BMI}) is ${john.BMI > mark.BMI ? "higher" : "lower"} than ${mark.firstName} ${mark.lastName}'s (${mark.BMI})`);

// for (let i = 1; i <= 10; i++) {
//     console.log(`pump ${i}`);

// }

