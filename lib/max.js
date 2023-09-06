
/**
 * @description takes in an array and return the biggest in the array
 * @param {*} array 
 * @returns max 
 */
const max = (array)=>{
    if(array == []|| array == null || array == NaN || array == undefined){
        return 'Must Have An Array With Elements To Work with'
    }
    let max = 0
    array.map((a)=>{
        if(a>max){
            max = a;
        }
    })
    return max;
}

export default max;