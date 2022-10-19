'use strict';

function calcAge(bithYear) {
  const age = 2037 - bithYear;

  function printAge() {
    const output = `You are ${age}, born in ${bithYear}`;
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Peter';
calcAge(1991);
