/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels=['a', 'e', 'i', 'o', 'u'];
  str=str.toLowerCase();
  return Array.from(str).reduce((acc,curr)=>{
    if(vowels.find(x=>x===curr)){
    acc++;
  }
    return acc
  },0)
}

module.exports = countVowels;