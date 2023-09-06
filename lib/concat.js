//* Merge two or more arrays without changing the initial array
//* but returns a new array with the content of all the arrays.

const concatArray = (arr1, arr2) => {
    const initialArray = ['first']
    const newArray = initialArray.concat(arr1, arr2)
    return newArray
}
export default concatArray