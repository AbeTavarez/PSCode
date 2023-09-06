/**
 * Reverses Arrays
 */

let arr = [1, 2, 3, 4, 5];
let reversed_arr = [];

export default function reverse(arr) {
  for (i = arr.length - 1; i >= 0; i--) {
    reversed_arr.push(arr[i]);
  }
}

reverse(arr);
console.log(arr);
console.log(reversed_arr);
