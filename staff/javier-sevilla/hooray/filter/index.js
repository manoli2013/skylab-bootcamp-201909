// --------------------------FILTER--------------------------------------
/**
 * creates a new array with all elements that pass the test implemented by the expresion.
 *
 * @param {*} expression The expression to evaluate in each item of the array.
 * 
 * @return{newArray} returns in a new array with the values ​​that meet the expression
 */
Hooray.prototype.filter = function(expression) { 	
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')
    var hoorayAux = new Hooray();
    var boleana;
    var j = 0;
	for (var i = 0; i < this.length; i++) {    
        boleana = expression(this[i])   
        if (boleana) {  
            hoorayAux[j]=this[i]
            j++
        }           
    }
    hoorayAux.length=j;
    return hoorayAux;
};