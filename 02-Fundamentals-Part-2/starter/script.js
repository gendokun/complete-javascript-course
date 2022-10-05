'use strict';

// function describeCountry(country, population, capitalCity) {
//     const str = `${country} has ${population} million people and its capital city is ${capitalCity}`
//     return str
// };

// console.log(describeCountry("Germany", 84, "Berlin"));
// console.log(describeCountry("Finland", 6, "Helsinki"));
// console.log(describeCountry("Portugal", 33, "Lissboa"));



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


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3
const checkWinner = (average1, average2) => {
    if (average1 >= 2 * average2) {
        return `Dolphins wins (${average1} vs ${average2})`
    } else if (average2 >= average1 * 2) {
        return `Koalas win (${average2} vs ${average1})`
    } else {
        return "No team wins!"
    }
}

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

console.log(checkWinner(avgDolphins, avgKoalas));
