//SYMBOL

const id =Symbol('333')
const anotherId = Symbol('333')
console.log(id === anotherId)

//ARRAYS FUNCTIONS AND OBJECTS
//ARRAYS
const names=["leo","leon","jake"]
//OBJECTS HAS KEY VALUE PAIRS 
let myObj={
    id : 777889,
    name : "leon",
    age : 90,
}
//FUNCTION

function myFunction(){
console.log("hello world")
console.log(5+5)
}

myFunction();

//TYPEOF
console.log(typeof myFunction)
console.log(typeof id )
console.log(typeof myObj)