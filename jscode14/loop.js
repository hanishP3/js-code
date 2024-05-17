const codeing = ["java",'python','cpp','ruby']
codeing.forEach(  cal => {                      //BETTER USE ARROW FUNCTION IN FOREACH EACH TIME
//    console.log(cal)
} )

//filter method
//by using foreach we cant return anything but by using filter we can return the value

const myArr = [1,3,4,5,6,9,8,10,11]
const myarra=myArr.filter( (calci) => calci >6 ) 
//console.log(myarra)

//THE SAME PROGRAM AS ABOVE BUT TRYING TO DO IN FOREACH

const myArr1 = [1,3,4,88,6,9,8,10,11]
myArr1.forEach( (value)=> {
    if(value <= 8){
        console.log(value)
    }
    else console.log(`${value} is greater than 8`)
} )
