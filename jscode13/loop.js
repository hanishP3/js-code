// //FOR OF LOOP
// //THIS IS ARRAY SPECIFIC LOOP

// const arr = [1,2,3,4]

// for (const num of arr) {
//     console.log(num)
// } 

// //FOR STRINGSS

// const place = "united nations of japan"

// for (const pl of place) {
//     console.log(`the char of place is ${pl}`)
// }

//MAPS
//MAPS ARE SAME AS ARRAY
//MAPS HOLDS KEY VALUE PAIRS
//HAS ONLLY UNIQUE VALUES
const myMap = new Map()
myMap.set("in","inida")
myMap.set("jp","japan")
myMap.set("swz","switzerland")
myMap.set("jp","japan")             //this is not repeated

// console.log(myMap)

//applying for of loops in the map

for (const [myMapFor,place] of myMap) {         // YOU CAN ADD AS MANY OWN ITERATORS YOU WANT 
    console.log(myMapFor ,":=", place)
}

//FOR OF FOR OBJECT
//THIS IS THE WRONG WAY
//BEACUSE OBBJECTS IS NOT ITERABLE
const myobj = {
    email:"leo@123.com",
    name: "hanish",
    age:21,
}
for (const [myobjects,details] of myobj) {
    console.log(myobjects,"and this is ", details)
}