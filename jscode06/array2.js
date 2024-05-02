const myName = ["hanish","leo","leon"]
const dc_char = ["batman","superman","flash"]
// myName.push(dc_char)
// console.log(myName);            //FROM THE OUTPUT WE CAN OBSERVE THAT THE 2 ARRAYS ARE NOT COMBINED PROPERLY.THE MYNAME ARRAY HAS 
                                //the dc_char array inside of it.
//THE BEST WAY TO COMBINE TWO OR MORE ARRAYS WITH EACH OTHER IS TO ISE "CONCAT" METHOD
let fullArray = myName.concat(dc_char)
console.log(fullArray); 
//THERE IS ANOTHER WAY TO COMBINE 2 OR MORE ARRAYS,WE CAN USE ""SPREAD"" METHOD [...ARRAY,...ARRAY]
let marvelHeros =["spiderman",'ironman','black panther']
let spreadArray =[...myName,...dc_char,...marvelHeros]
console.log(spreadArray);

let myArray = [1,2,3,[55,66,77],[777,888,999]]
console.log(myArray.flat(Infinity));           //FLAT METHOD IS USED TO COMMBINE ALL THE ITEMS IN THE ARRAY WHICH IS IN ANOTHER 
                                                // ARRAY.THIS MAKES EVERYTHING INTO AN SINGLE LINE
                                                