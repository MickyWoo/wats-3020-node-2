/*
Description: program works similarly to the `1-fizzbuzz` program.
Input: string 
Output: string + fizz. buzz, fizzbuzz on 3,5,15
Usage: 2-fizzbuzz-fun
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getIntegerArg()


function fizzbuzz(n){
  if (n % 15 == 0){
    return `fizzbuzz`;
  } else if ( n % 3 == 0 ) {
    return `fizz`;
  } else if ( n % 5 == 0 ) {
    return `buzz`;
  } else {
    return ``;
  }
// TODO provide for tests for divisible for 3,5, and 15 to return desired output
}

// TODO check if input is not an integer
if ( isNaN (input) || !Number.isInteger(input)) {
  console.log(`node 1-fizzbuz please input integer`)
}
else {
  // TODO provide info to for loop to iterate from 1 to value of input
  for (let i = +1; i<=input; i++  ) {
    console.log(`${i} ${fizzbuzz(i)}`);
  }
}


