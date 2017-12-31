function reverseWords(string){
  var
    stringArr,
    reversedArr;
// making an array of words in the string
  stringArr = string.split(' ');
// new array to push reversed words into
  reversedArr = [];

  stringArr.forEach(word => {
// create a variable to collect the word reversed
    var reversedWord = '';
// loop through the string backwards to read the letters in reverse
    for(var i = word.length - 1; i >=0; i--){
      reversedWord += word[i]
    }
// push each letter in the sentence backwards in the array
    reversedArr.push(reversedWord);
  });
// join the array to a string and return
  return reversedArr.join(' ');
}

console.log(reverseWords("I am someone I don't know"));
console.log(reverseWords("If i type it out it happens again!"));
