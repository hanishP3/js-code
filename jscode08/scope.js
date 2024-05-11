//SCOPES
//LOCAL SCOPE AND GLOBAL SCOPE
let a = 687
if (true) {
    let a = 5
    const b = 7
    var v = 99
}
console.log(v)          //this is the reason we dont use var because it doest have block nature
console.log(a);          // a is declared in the global scope
