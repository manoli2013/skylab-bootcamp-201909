/**
 * 
 * The function checks if at least there is one argument in the array that 
 * accomplish the implemented condition for the function that we introduced. 
 *
 * @param {Hooray} hooray The hooray the some should evaluate
 * @param {Function} expression we use to test the elements. 
 * @returns {boolean} true if any of the elements match with the condition or false if any of them match.
 *  
 */ 

Hooray.prototype.some = function(expression) {  
    if (typeof expression !== "function") throw new TypeError(expression + " is not a function");

    for (i=0; i< this.length; i++){
        if (expression(this[i])){
            return true 
        }
    } 
    return false
};