//REST OPERTAOR - ...Name
//depending on the usecase we call it as rest or spread.
//the purpose of using rest operator is to combine the many items into an array as show below
function calculateCartPrice (...num1) {
    return num1;
}
console.log(calculateCartPrice(4,89898,6767))   //until unless you writr console.log() function nothing prints on the screen
                                                //return statemnet works inside of the memory but to print it out we use console.log()
//ANOTHER CASE
function calculate(val1,val2,...num2) {         //val1 is 23,val2 is 567 and the remaining are of num2
    return num2;
}
console.log(calculate(23,567,890,567,333))

//USING OBJECTS
const user ={
    userId : 456,
    email:"leogoogle@amazon.com"
}
