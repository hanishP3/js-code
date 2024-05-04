//OBJECtS
//OBEJCT LITERALS OR OBJECT DECLARATION
let myObject = {               // if let object = {} this is an empty object
    
    name:"hanish",
    "location":"australlia",       //WE CAN ACCESS THE LOCATION OBJECT THROGHT THE SECOUND METHOD OF ACCESSING 
    email :"hanish@github.com",
    age : 21,
    isLoggedIn:false,

}
//TO ACCESS THE OBJECTS
console.log(myObject.name);
console.log(myObject["name"]);
console.log(myObject["location"]);

//SYMBOLS
let mySymbol = Symbol("key1")