/**
 * concats two or more Hoorays on a new hooray. 
 * First Hooray concatenated it's the hooray who call's the method. If no more Hoorays are sent, only
 * the calling Hooray is returned.
 * Concat doesn't modify the original Hoorays.
 * 
 * @param {Hooray} this - the Hooray that call's the concat and will be contenated on the Hooray.
 * @param {*} item - Required: the Hooray(s) to be concatenated in the params order on the new Hooray.
 */
Hooray.prototype.concat = function () {
	
    var result= new Hooray();  
	
	for (var i=0; i<this.length; i++){
        result[result.length++]=this[i];
    }

    for (var i=0; i<arguments.length; i++) {
        if (arguments[i] instanceof Hooray) {
            for (var j=0; j<arguments[i].length; j++) {
                result[result.length++]=arguments[i][j];
            }
        } else result[result.length++]=arguments[i];
    }
    return result;
}