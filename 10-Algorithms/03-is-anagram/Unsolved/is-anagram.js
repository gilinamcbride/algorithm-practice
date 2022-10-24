// TODO: Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function (strA, strB) {
  var newA = strA.split('').sort().join('');
  var newB = strB.split('').sort().join('');
  console.log(newA, newB);
  if (newA === newB) {
    return true;
  } else return false;
};
