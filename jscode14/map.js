//MAP
//MAP WORKS SAME AS FOREACH
 
const myarr = [1,4,5,6,7,8,44,6,8]

const myAdd = myarr.map( (num) => num +10 )        //ADDED 10 TO EACH OBJECT IN THE ARRAY  
//console.log(myAdd)                          

//CHAINING OF METHODS

const myNum =[1,2,3,4,5,6,7,8,9,10]

const myFun = myNum.map( (nk) => nk*10 )
                    .map( (nk) => nk+2 )   
                    .filter( (nk)=> nk <=33 )
console.log(myFun)