// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var newNum = arr[i] + arr[i++];
  }
  return newNum;
};
