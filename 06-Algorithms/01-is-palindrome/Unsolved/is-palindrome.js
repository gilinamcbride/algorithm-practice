// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
  //   var reverse = str.slice(str.length, 0);
  var reverse = str.split('').reverse().join('');
  if (str === reverse) {
    return true;
  } else {
    return false;
  }
};
