
/**
 * @description takes in an array and return the smallest in the array in the array
 * @param {*} array 
 * @returns min 
 */
const min = (array)=>{
    if(array == []|| array == null || array == NaN || array == undefined){
        return 'Must Have An Array With Elements To Work with'
    }
    let min = array[0]
    array.map((a)=>{
        if(a<min){
            min = a;
        }
    })
    return min;
}

export default min;