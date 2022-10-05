
// Practice Code

// const country = 'Germany';
// const continent = 'Europe';
// let population = 84;
// const isIsland = false;
// const language = "german";
// const finlandPopulation = 6;
// const averagePopulationOfCountries = 33;
// const finalSentence = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// if (population > averagePopulationOfCountries) {
//     console.log(`${country}'s population is higher than average!`)
// } else {
//     console.log(`${country}'s population is ${averagePopulationOfCountries - population} million below average!`)
// };

// console.log(`Germany's population is ${population > averagePopulationOfCountries ? "above" : "below"} average`);

// if (language === "english" && population < 50 && isIsland === false) {
//     console.log("You should live in Austria!")
// } else {
//     console.log(`${country} does not meet your critera!`)
// };

// const numNeighbours = Number(prompt("How many neighbour countries does your country have ?"));

// if (numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border!")
// } else {
//     console.log("No borders");
// };



/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);







true;
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);


// Math Operators
const now = 2030
const agePeter = now - 1987;
const ageSarah = now - 2020;
console.log(agePeter, ageSarah);

console.log(agePeter * 2, agePeter / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Peter";
const LastName = "Häring";
console.log(firstName + " " + LastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1;
x--;
x--;
console.log(x);

// Comparsion Operators
console.log(agePeter > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

*/




/*
const age = 15;

if (age >= 18) {
    console.log(`You are old enough to drive 😀`)
} else {
    const yearsLeft = 18 - age;
    console.log(`You still need to wait 😥 ${yearsLeft} years`);
};

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
};

console.log(century);

*/
/*
const massJohn = 92;
const heightJohn = 1.95;
const BMIJohn = massJohn / heightJohn ** 2;
const massMark = 78;
const heightMark = 1.69;
const BMIMark = massMark / heightMark ** 2;

// const massJohn = 85;
// const heightJohn = 1.76;
// const BMIJohn = massJohn / heightJohn ** 2;
// const massMark = 95;
// const heightMark = 1.88;
// const BMIMark = massMark / heightMark ** 2;

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})! `)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})! `)
}
*/

/*
const age = "18";
if (age === 18) console.log("you just became an adult! (strict)")

if (age == 18) console.log("you just became an adult! (loose)")

const favourite = Number(prompt("What's your favourite number ?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool, 23 is great!")
} else if (favourite === 7) {
    console.log("7 is also cool!")
} else {
    console.log("Number is not 23 or 7")
};
*/

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);

// const isTired = false;

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive")
// } else {
//     console.log("Someone else should drive")
// };

// const dolphinScore1 = 96;
// const dolphinScore2 = 108;
// const dolphinScore3 = 89;
// const dolphinAverageScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;

// const koalaScore1 = 88;
// const koalaScore2 = 91;
// const koalaScore3 = 110;
// const koalaAverageScore = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

// const dolphinScore1 = 97;
// const dolphinScore2 = 112;
// const dolphinScore3 = 101;
// const dolphinAverageScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;

// const koalaScore1 = 109;
// const koalaScore2 = 95;
// const koalaScore3 = 106;
// const koalaAverageScore = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

// const dolphinScore1 = 97;
// const dolphinScore2 = 112;
// const dolphinScore3 = 101;
// const dolphinAverageScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;

// const koalaScore1 = 109;
// const koalaScore2 = 95;
// const koalaScore3 = 106;
// const koalaAverageScore = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

// const minimumScore = 100;

// if (dolphinAverageScore > koalaAverageScore && dolphinAverageScore > minimumScore) {
//     console.log("Dolphins win the trophy!")
// } else if (koalaAverageScore > dolphinAverageScore && koalaAverageScore > minimumScore) {
//     console.log("Koalas win the trohpy!")
// } else if (koalaAverageScore > dolphinAverageScore || dolphinAverageScore > koalaAverageScore) {
//     console.log(`Minimum Points not met with both of the teams!
//     Dolphins Average Score: ${dolphinAverageScore}
//     Koala Average Score: ${koalaAverageScore}
//     `)
// } else if (koalaAverageScore === dolphinAverageScore && koalaAverageScore > minimumScore) {
//     console.log("A draw! Sudden Death!")
// } else {
//     console.log("Nobody wins the trophy! Draw without minimum Points!")
// }


// const day = "asdasd";

// if (day === "monday") {
//     console.log("Go Code Meetup");
// } else if (day === "tuesday") {

// } else if (day === "wednesday" || day === "thursday") {
//     console.log("Write code examples");
// } else {
//     console.log("No valid day!");
// };

// const age = 23;
// age >= 18 ? console.log("I like to drink wine!") : console.log("dont drink anything");


const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);