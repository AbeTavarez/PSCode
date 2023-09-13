/*
@Params
@Shuffled: checks to see is an element is empty
 */
function shuffle(array) {
    return array.sort(()=> Math.random() - 0.5);
}

// const testData = [{name: 'Kevin'},2,3,4,{name:'william'},6,7,8,9]
const shuffledArray = shuffle(testData)
console.log(shuffledArray)