/**
 * Reverses Arrays
 */

function Reverse(arr) {
  let reversed_arr = [];
  for (i = arr.length - 1; i >= 0; i--) {
    reversed_arr.push(arr[i]);
  }

  return reversed_arr;
}

module.exports = Reverse
