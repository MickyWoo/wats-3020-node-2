//TODO fill in comment template
/*
Description:count the characters in the string, and output the number of each character (sorted in order of frequency)
Input: string 
Output: number of each character 
Usage: node 5-character-count 
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getStringArg()


//test that it is a string
//TODO check for string argument and if no string is entered provide a usage statement and quit
if ( !input ) {

  console.log(`node 5-character-count please input string`)
}
else {
  let charCount ={};
  let characters = input.split(``);

  // for (let i = 0; i < characters.length; i++)
  for (let character of characters ){
    // of is for arrays
    if (charCount[character]) {
      charCount[character]++;
    }
    else {
      charCount[character] = 1;
    }

  }
let charArr = [];

for( let character in charCount){
  //in is for objects 
  let newElem = {char:character, count:charCount[character]};
  charArr.push(newElem);
}

charArr.sort(function(a,b){
  return a.count -b.count;

})


  // console.log(charArr);  this works

  for (let i = 0; i < charArr.length; i++){
    console.log(` ${charArr[i].char}: ${charArr[i].count}`);
  }
}



