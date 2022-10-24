// TODO: Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function (arr) {
  if (arr.length === 0) {
    return true;
  }
  var array = arr.sort();
  console.log(array);
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i + 1] === array[i]) {
      return false;
    } else return true;
  }
};
