
/**pop method.
 * 
 */
Hooray.prototype.pop = function (){
    if (this.length === 0) { return undefined };
	var aux = this[this.length -1];
	
	delete this[this.length - 1];
	this.length--;
    return aux;
}
