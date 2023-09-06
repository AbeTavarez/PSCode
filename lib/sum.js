
/**
 * @description takes in an array as an argument, map throught the array and add the valeu of each element to the sum
 * @param {*} array 
 * @returns sum
 */
const sum = (array)=>{
    if(array == []|| array == null || array == NaN || array == undefined){
        return 'Must Have An Array With Elements To Work with'
    }
    let sum = 0;
    array.map((a)=>{
        sum += a;
    })
    return sum
}

export default sum;