//TODO fill in comment template
/*
Description:identifies that a string has been inputted and returns the reversed string by iterating through the full length of the string
Input: string
Output:reverse string character by character
Usage: 4-rever-string-iterate
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getStringArg()

function reverseWithFullIteration(str) {
    let result = '';
    // TODO loop from end of str (str.length-1) to beginning
    for ( let i = str.length-1; i>=0; i-- ) {
        // TODO add the letter in the current position to the result string.
        result += str[i];
    }
    return result;
}

function reverseWithHalfIteration(str) {
    // STRETCH TODO write a function that reverses the string but only iterates over half of the input string.
}

//test that it is a string
//TODO check for string argument and if no string is entered provide a usage statement and quit
if ( !input  ) {
    console.log(`node 4-reverse-string-iterate please input string`)
}
else {
    // use functions to reverse string
    console.log("result with full iteration", reverseWithFullIteration(input));

    // STRETCH TODO output the result of your reverseWithHalfIteration function

}




