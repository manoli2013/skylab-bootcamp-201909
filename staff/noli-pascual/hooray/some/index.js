/**
 * 
 * SOME checks if any of the elements in hooray accomplishes condition provided
 *
 * @param {Array} array 
 * @param {Function} expression we use to test the elements. 
 * 
 * @returns {boolean} true if any of the elements match with the condition or false if any of them match.
 *  
 */ 


// function checkCondition(item) {
//     return item > 5
// }

Hooray.prototype.some = function(expression) {  
    if (typeof expression !== "function") throw new TypeError(expression + " is not a function");

    for (i=0; i< this.length; i++){
        if (expression(this[i])){
            return true 
        }
    } 
    return false
};