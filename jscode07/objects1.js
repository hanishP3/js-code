//we can declare objects in two ways 
//one is object literals as seen in objects.js
//another way is singleton
const appUser = new Object()

appUser.id = "2356udeil"
appUser.name="leon"
appUser.isLoggedIn = "false"

console.log(appUser);

//BELOW IS THE CODE FOR OBJECT INSIDE AN OBJECT
const regularUser = {
    name:{
        fullname:{
            firstName:"lanslay",
            secoundName : "leo"
        }
    }
}

console.log(regularUser.name.fullname)

//COMBINING OBJECTS
const obj1 = {
    1 : "q",
    2 : "t",
}
const obj2 = {
    3 : "o",
    4 : "p",
}

const obj3 = {obj1,obj2}        //this is the wrong way to add objects together
console.log(obj3);

//THE CORRECT WAYS 
const obj4 =  Object.assign({},obj1,obj2)
console.log(obj4);

//MORE SIMPLE THAN ABOVE THIS IS CALLED SPREAD METHOD
const obj6= {...obj1,...obj2}
console.log(obj6);

//IN REAL WORLD WORKING WE WILL ENCOUNTER MANY NUMBER OF OBJECTS INSIDE AN ARRAY
const myArr = [
    {
        id:1,
        name : "leo",
        age : 21,
    },
    {
        id:2,
        name : "hanish",
        age :21,
    },
    {
        id:3,
        name:"leohanish",
        age : 21,
    },
]

console.log(myArr[2].id);
//TO ACCESS KEYS OF A PARTICULAR OBJECT
console.log(Object.keys(obj1));