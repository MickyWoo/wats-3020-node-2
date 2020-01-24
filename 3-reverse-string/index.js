//TODO fill in comment template
/*
Description:program properly identifies that a string has been inputted and returns the reversed string as output.
Input: string 
Output: string reversed 
Usage: node 3-reverse-string 
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getStringArg()


//test that it is a string
//TODO check for string argument and if no string is entered provide a usage statement and quit
if ( !input ) {
   console.log( `node 3-reverse-string please input a string` );
}
else {
    // uses string methods to reverse the string
    console.log(input.split('').reverse().join(''));
}




