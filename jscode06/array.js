//DECLARING Am ARRAY
let myArray = [1,2,4,6,8,9]
console.log(myArray);
//ARRAY METHODS
myArray.push(10)
console.log(myArray);
myArray.pop()         //POP METHOD DOENST TAKE ANY ARGUMENTS IT JUST DELETES THE LAST ITEM
console.log(myArray);
myArray.unshift(77)   // UNSHIFT IS USED RARELY.THE UNSHIFT METHOD ADD THE ITEM IN FRONT OF THE ARRAY
console.log(myArray);
myArray.shift()       //SHIFT METHOD REMOVES AN ELEMENT IN THE FRONT OF AN ARRAY
console.log(myArray);
console.log(myArray.includes(99)); //INCLUDES TELL US IF AN ITEM IS THERE IN ARRAY.OUTPUTS TRUE OR FALSE
let myarr2 = [567,890,25,89,67]
console.log(myarr2.slice(1,4));   //SLICE METHOD IS USED TO RIP OFF A PORTION IN AN ARRAY and OUTPUTS IT.
console.log(myarr2.splice(1,4));
