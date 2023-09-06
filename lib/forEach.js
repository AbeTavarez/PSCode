
//Loops over array an run callback function on each item in the array

export default function forEach(arr,cb){
    for(let i=0; i<arr.length; i++){
        cb(arr[i],i,arr)
    }
}
