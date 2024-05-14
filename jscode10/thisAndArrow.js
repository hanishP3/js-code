// //THIS KEYWORD
// // THIS KEYWORD REFERS TO THE CURRENT VALUE IN THE SCOPE
// const myData = {
//     name:"hanish",
//     age:21,
//     favcolor:"black",

//    myfunction() {
//     console.log(`this is a this keyword used output the name is ${this.name} and the age is ${this.age}`);
//    }

// }
// myData.myfunction();
// name:"leo"
// myfunction();

//ARROW FUNCTION
// const myArrow = (num1,num2) => {            //we can use => arrow instead of function keyword
//     return num1+num2
// } 
// console.log(myArrow(1,4))

//BY USING ARROW WE CAN DO IMPLICIT 
const myArrow02 = (num1,num2) => ( num1*num2 )       //NEED NOT TO WRITE THE CURLY BRACES AND RETURN ST BEACUSE WE HAVE ONLY ONE ST
console.log(myArrow02(23,89));