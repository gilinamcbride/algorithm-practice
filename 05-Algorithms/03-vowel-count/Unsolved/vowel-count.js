// Write code to return the the number of vowels in `str`

// var vowelCount = function (str) {
//   var count = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (
//       str[i] === 'a' ||
//       str[i] === 'e' ||
//       str[i] === 'i' ||
//       str[i] === 'o' ||
//       str[i] === 'u'
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

var vowelCount = function (str) {
  var result = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < str.length; i++) {
    var letter = str[i].toLowerCase();

    if (vowels.indexOf(letter) !== -1) {
      result += 1;
    }
  }

  return result;
};
