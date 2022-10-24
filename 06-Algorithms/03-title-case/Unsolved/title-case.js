// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
  var result = [];
  var array = str.split(' ');
  for (var i = 0; i < array.length; i++) {
    var word = array[i].split('');
    word[0] = word[0].toUpperCase();
    result.push(word.join(''));
    console.log(result);
  }
  return result.join(' ');
};
