/*
 * @description removes array elements that meet the conditions
 * @params (value, index, array)
 * @returns array of removed elements
 */


let newArr = [];

//condition
function Even(n) {
  return n % 2 == 0;
}

 function Remove(arr) {
  for (let i = 0; i < arr.length; i++) {

    //callback function with condition
    if (Even(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr
}



 module.exports = Remove;
