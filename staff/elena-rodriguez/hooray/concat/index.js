/**
 * CONCAT.
 * Concatenate an initial hooray with other arguments and returns a new hooray with all the elements. 
 * 
 * @param {array} Array The initial array given. 
 * @param {*} other arguments given. 
 * 
 * 
 * @returns {Hooray} new Hooray that contains initial Array and the elements given, all concatenated. 
 * 
 */
Hooray.prototype.concat = function() { 	
	var newHooray = new Hooray();	
	
    for (var y = 0; y < this.length; y++){
        newHooray[y] = this[y];
    }
		
    for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] instanceof Array) {
			for (var j = 0; j < arguments[i].length; j++){
				newHooray[y] = arguments[i][j];
				++y
			}
		} else {
			newHooray[y] = arguments[i];
			++y			
		}
	}      
	newHooray.length = y;
    return newHooray;
    
};