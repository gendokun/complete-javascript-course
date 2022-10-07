// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// CODEWARS
/*
const input = "Just kidding there is still one more";

function spinWords(string) {
  const wordarray = string.split(" ");

  for (let i = 0; i < wordarray.length; i++) {
    let revChars = [];
    if (wordarray[i].length > 4) {
      revChars = wordarray[i].split("").reverse().join("");

      wordarray[i] = revChars;
    }
  }
  return wordarray.join(" ");
}

console.log(spinWords(input));
*/
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// // 1) Understanding the problem:
// /* - What is temp amplitude ? Answer Difference between highest and lowest temp
// How to calculate the maximum and minimum temperaturs ?
// What does a sensor error look like ? What to do when one occurs ? (Ignore error data)

// // 2) Breaking up into sub-problems:
// // How to Ignore Sensor Errors ?
// - find  max value in temp array
// - find min values in temp arry
// - subtract min from max and return (amplitude)
// */

// const calcTempAmplitude = function (arr, arr2) {
//   //Loop for string and remove it.
//   const ArrayConcat = arr.concat(arr2);
//   for (let i = 0; i < ArrayConcat.length; i++) {
//     if (typeof ArrayConcat[i] !== "number") ArrayConcat.splice(i, 1);
//   }
//   return Math.max(...ArrayConcat) - Math.min(...ArrayConcat);
// };

// console.log(calcTempAmplitude(temperatures, [3, 5, 7, -2, 3, -12]));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]


Steps:
- loop through array
- increment count days in new text
- build new array with text
concat array in return
*/

const temperatures = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  const stringArray = [];
  for (let i = 0; i < arr.length; i++) {
    stringArray.push(`... ${arr[i]} °C in ${i + 1} days`);
  }
  console.log(stringArray.join(" "));
};
printForecast(temperatures);
