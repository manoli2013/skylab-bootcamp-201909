Hooray.prototype.join = function(separator){

    if(separator === undefined) {

        separator =',';
    }
       
    result = '';

    for (var i = 0; i < this.length; i++) {

        if (i === this.length - 1) {

            result += this[i];
        } else {

            result +=this[i] + separator;
        } 
	} 
    return result;
}