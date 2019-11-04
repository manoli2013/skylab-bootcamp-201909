console.log("DEMO map")
var array = [5,10,20]
console.log("Should return an array affected by the function we have given")
var newArr = map(array, function(value){
    return value * 4
});
console.log(newArr)

console.log("Should show undefined is not an array")
try{
    map()
}
catch(error){ 
    console.error(error.message);
}
console.log("Should show undefined is not a function")
try{
    map([])
}
catch(error){
    console.error(error.message)
}