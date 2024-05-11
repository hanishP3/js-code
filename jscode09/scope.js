//nested scope or scope level
function one () {
    console.log("hanish")
    let a = 67676
    function two (){
        let var1 = "leon"
        console.log(a)
        let var2="this is inside function two "
    }
    // console.log(var2)
    two();
}
one();
