/*
 * @description removes array elements that meet the conditions
 * @params (value, index, array)
 * @returns array of removed elements
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = [];

//condition
function Even(n) {
  return n % 2 == 0;
}

 function Remove() {
  for (let i = 0; i < arr.length; i++) {

    //callback function with condition
    if (Even(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr
}

// Remove(arr)
// console.log(Remove())

 module.exports = Remove;
