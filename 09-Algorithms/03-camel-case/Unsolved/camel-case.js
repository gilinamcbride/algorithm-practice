// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function (str) {
  var answer = [];
  var arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[0]) {
      var firstWord = arr[0].split('');
      firstWord[0] = firstWord[0].toLowerCase();
      var lower = firstWord.join('');
      answer.push(lower);
    } else {
      var word = arr[i].split('');
      word[0] = word[0].toUpperCase();
      var word2 = word.join('');
      answer.push(word2);
    }
  }
  return answer.join('');
};
