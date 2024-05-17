//REDUCE
//WHEN USING REDUCE WE ALSO USE (ACCUMULATOR,CURRENT VALUES)
//HERE THE LOOPS GOES AS MANY TIMES AS THE NUMBERS IN THE ARRAY
const myNum = [1,2,3,4,5,6]
const myRed = myNum.reduce(function (acc,currentval)  {
    console.log(`acc:=${acc} and currentval =${currentval}`)
    return acc + currentval
},0)
console.log(myRed)
//USING REDUCE METHOD BY ARROW FUNCTION

// const myNum2 = [1,2,3,4,5,6]
// const myBlue = myNum2.reduce( (accu,currval) => (
//     console.log(`acc:=${accu} and currval:= ${currval}`),
//     console.log(accu+currval),

