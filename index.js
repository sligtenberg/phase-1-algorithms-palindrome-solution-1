// solution

const isPalindrome = (word) => word === reverseString(word);

const reverseString = (word) => {
  let reversedWord = '';
  for (let i in word) reversedWord = reversedWord + word[word.length - 1 - i];
  return reversedWord;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
