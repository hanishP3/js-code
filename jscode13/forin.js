//TO ITERATE THE OBJECTS WE USE FORIN LOOP
const myobj = {
    name:"dave",                                    
    email:"dave123@12t.com",
    age:67,
}
for (const key in myobj) {                      //key is the varaible which stores the key values
   // console.log(`${key} the detail is ${myobj[key]}`)       //${myobj[key]} is the varible which stores the pairs 
    }

//Forin for array
const lang =["java",'python',"javascript","cpp"]       //its an array this is the reason to get 0,1,2,3 as output 
for (const myKey in lang) {                            //to prevent it we write variablename[iteratorname]
  console.log(`the languages are ${lang[myKey]}`)
    }