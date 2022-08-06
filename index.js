function isPalindrome(word) {
  return word == word.split('').reverse().join("");
}

/* 
  
*/

/*
  the function should take in a string, and returning a boolean
  there are only 2 potential variables, the original string, and the the reversed string
  in order to reverse the string, it must be split into an array of 
  substrings, use the reverse() function and joined back together
  then compared to the original string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
