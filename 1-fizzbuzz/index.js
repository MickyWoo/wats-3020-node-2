/*
Description: program that counts from 1, outputting _fizz if divisible by 3, 
_buzz if divisible by 5, and _fizzbuzz if divisible by both.
Input:an integer
Output:numbers and strings of fizz, buzz and fizzbuzz if divisible by 3,5,or both
Usage: 1-fizzbuzz integer
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getIntegerArg()

// test that input is a number and exit with error
// TODO check if input is not an integer
if ( isNaN (input) || !Number.isInteger(input)) {
  console.log(`node 1-fizzbuz please input integer`)
}
else {
  // iterate from 1 to the value of input
  // TODO provide info to for loop to iterate from 1 to value of input
  for ( let i = +1; i<=input; i++ ) {
    
    //TODO provide for tests for divisible for 3,5, and 15 to create desired output
    if ( i % 15 == 0 ) {
      console.log(`${i} fizzbuzz`);
    } else if ( i % 3 == 0 ) {
      console.log(`${i} fizz`);
    } else if ( i % 5 == 0 ) {
      console.log(`${i} buzz`);
    } else {
      console.log(`${i}`);
    }

  }
}


