// --------------------------FIND--------------------------------------
/**
 * returns the value of the first element in the provided array that satisfies the expresion.
 * 
 * @param {*} array array The array to iterate.
 * @param {*} expression The expression to evaluate in each item of the array.
 * 
 * @return{result} returns the value ​​that meet the expression
 */
Hooray.prototype.find = function(expression) { 	
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')
    var result;
    var boleana = false;
	for (var i = 0; i < this.length&&boleana===false; i++) {    
        boleana = expression(this[i])   
        if (boleana) {
            result=this[i]
        }           
    }
    return result;
};
