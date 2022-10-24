// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function (arr) {
  if (arr.length === 0) {
    return 0;
  }
  var songs = arr.sort();
  console.log(songs);
  var start = 0;
  var count = 0;
  for (var i = 0; i < songs.length; i++) {
    if (start < 59) {
      start = start + arr[i];
      count = count + 1;

      console.log('count', count);
    }
  }
  return count;
};
