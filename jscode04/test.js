//stack and heap
let myName = "hanish"
let myName2 = myName
myName2 = "leo"
console.log(myName);
console.log(myName2);

//HEAP
//HEAP MEMORY IS USED BY NON PRIMITIVE DS
 let user ={
    email:"leo123@google.com",
    id:378,
    name:"hanish",
 }

 let user02 = user;
  user02.email ="hanish3333@amazon.com";
  user02.id = 333;
  console.log(user02.email);
  console.log(user02.id)