// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function (arr) {
  if (arr[0].length === 0) {
    return 0;
  }
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    var secondArr = arr[i];
    for (var j = 0; j < secondArr.length; j++) {
      if (secondArr[j] === 'X') {
        count = count + 1;
      }
    }
  }
  return count;
};
