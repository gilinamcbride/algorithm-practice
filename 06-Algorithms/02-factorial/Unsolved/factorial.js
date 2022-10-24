// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {
  //can remove this and set i > 1 instead of zero because factorial of 1 and 0 is 1
  //   if (num === 0) {
  //     return 1;
  //   }
  var result = 1;
  for (var i = num; i > 0; i--) {
    result = result * i;
  }
  return result;
};
