// --------------------------SOME--------------------------------------
/**
 * check if one array elements pass the test implemented by the expression
 * 
 * @param {*} array array The array to iterate.
 * @param {*} expression The expression to evaluate in each item of the array.
 * 
 * @return{result} return true or false
 */
Hooray.prototype.some = function(expression) { 	
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')
    var boleana;;
	for (var i = 0; i < this.length; i++) {    
        boleana = expression(this[i])
        if (boleana) return true;        
    }
    return false;
};