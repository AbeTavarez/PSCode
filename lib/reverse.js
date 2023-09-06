/**
 * Reverses Arrays
 */


let reversed_arr = [];

export default function reverse(arr) {
  for (i = arr.length - 1; i >= 0; i--) {
    reversed_arr.push(arr[i]);
  }
}

reverse(arr);

