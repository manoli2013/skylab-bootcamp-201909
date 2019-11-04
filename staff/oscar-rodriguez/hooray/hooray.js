function Hooray() {
    for (var i = 0; i  < arguments.length; i++)
        this[i] = arguments[i];

    this.length = arguments.length;
}

/**
 * Iterates the current hooray and evaluates an expression on each item.
 * 
 * @param {Function} expression The expression to evaluate in each item of the hooray.
 * 
 * @throws {TypeError} If expression is not a function.
 */
Hooray.prototype.forEach = function(expression) {
	if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

	//throw Error('🤡');
	for (var i = 0; i < this.length; i++) 
		expression(this[i], i, this);
};

/**
 * Pushes a variable number of items into this hooray.
 * 
 * @param {...any} item The item (or items) to push.
 * 
 * @returns {number} The new lenth of the hooray.
 */
Hooray.prototype.push = function() { 
	for (var i = 0; i < arguments.length; i++)
		this[this.length++] = arguments[i];

	return this.length;
};

/**
 * Deletes the first item of an hooray and shifts each item into a lower index.
 * Returns de removed item of the hooray.
 * 
 * 
 * @returns {any} The item deleted from the hooray.
 */
Hooray.prototype.shift = function  () {
    
    if (this.length===0) return undefined;
    var itemShifted = this[0];

    for (var i=1; i<this.length; i++) {
        this[i-1]=this[i];
    }
    
    delete this[this.length-1];
    this.length--;
    return itemShifted;
}

/**
 * Add a new item at beggining of an hooray and unshifts each item into a higher index.
 * 
 * @param {any} item The item will be added in the hooray.
 * 
 * @returns {Number} the new length of the Hooray
 */
Hooray.prototype.unshift = function () {

    for (var i=((this.length-1)+(arguments.length)); i>0; i--) {
        this[i]=this[i-(arguments.length)];
    }
    for (var i=0; i<(arguments.length); i++) {
        this[i]=arguments[i];
    }
	this.length += arguments.length;
    return this.length;
}

/**
 * Deletes the last item of an hooray and returns de deleted item.
 *  
 * @returns {any} returns de last item deleted on the hooray
 */
Hooray.prototype.pop = function () {
    
    if (this.length===0) return undefined;

    var result = this[this.length-1];
    
    delete this[this.length-1];
    this.length-=1;
    
    return result;
} 

/**
 * Converts an Array into a String merging each item with the separator if it's provided.
 * 
 * @param {String} separator Optional -- Separator between each element. 
 *                           If an separator is omited, as default separator is a coma.
 * 
 * @returns {string} The Hooray as a string.
 */
Hooray.prototype.join = function () {
        
    var separator = arguments[0] || ",";
    var string='';

    for (var i=0; i<this.length; i++) {
        string+=this[i];
        if (i<this.length-1) string+=separator;
    }
    return string;
}

/**
 * Aplies an expresion to each item of an hooray and saves the result on a new hooray.
 * 
 * @param {Function} expression The expression that will be applied to each hooray item.
 * 
 * @returns {Array} a new hooray with the results of apply the expression into Array
 */
Hooray.prototype.map = function (expression) {

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');    
    
    var newHooray = new Hooray ();
    for (var i=0; i<this.length; i++) {
		newHooray[newHooray.length++]=expression(this[i]);
    }

    return newHooray;
}

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


/**
 * Evaluate if all items accomplish the expression sent.
 * 
 * @param {Function} expression The expression to evaluate on every item in the Hooray.
 * 
 * @returns {Boolean} True when ALL itmes acomplish expression || False when not.
 * 
 * @throws {TypeError} If expression is not a function.
 */
Hooray.prototype.every = function  (expression) {

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    
    for (i=0; i<this.length; i++) {
        if (!(expression(this[i]))) return false;
    }
    return true;
}

/**
 * Fills a hooray with the item provided as a parameter;
 * 
 * @param {*} any - the value to fill into the Hooray
 * @param {Number} Start - Optional. Index where start to fill. 0 as default if is not declared
 *                                   If Start is negative, will start #Start items from the end.
 * 
 * @param {Number} End - Optional. Index where end's the fill. End index is not includded. 
 *                                 hooray's length as default if is not declared.
 *                                 If End is negative, will fill until #End items from the end.
 */
Hooray.prototype.fill = function (item) {

    var start = arguments[1] || 0;
    if (typeof(start) !== "number") start = 0;
    start = start < 0 ? this.length + start : start;
    var end = arguments[2] || this.length;
    if (typeof(end) !== "number") end = 0;
    end = end < 0 ? this.length + end : end;

    if (end > this.length) end = this.length;    

    for( var i=start; i<end; i++){
        this[i]=item;
    }
}


/**
 * Return a Hooray with the items that accomplish the expression provided as a parameter
 * 
 * @param {Function} expression The expression that evaluates the items to be returned.
 * 
 * @returns {Hooray} The Hooray with the items that accomplish the expression provided on the 
 *                   calling hooray. If there're no items that accomplish, returns an empty Hooray.
 * 
 * @throws {TypeError} If the expression is not a function.
 */
Hooray.prototype.filter = function (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    var results = new Hooray;

    for (i=0; i<this.length; i++) {
        if (expression(this[i])) {
            results[results.length++]=this[i];
        }
    }
    return results;
}

/**
 * Returns the index of first item that accomplish the expression provided.
 * 
 * @param {Function} expression The expression that evaluates the items to be returned.
 * 
 * @returns {Number} The index of the first item that accomplish the expression provided.  
 *                   If there're no items that accomplish, returns -1.
 * 
 * @throws {TypeError} If the expression is not a function.
 */
Hooray.prototype.findIndex = function (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    
    for (i=0; i<this.length; i++) {
        if (expression(this[i])) return i;
    }
    return -1;
}

/**
 * Returns the first item that accomplish the expression provided.
 * 
 * @param {Function} expression The expression that evaluates the items to be returned.
 * 
 * @returns {*} The first item that accomplish the expression provided.
 *              If there're no items that accomplish, returns undefined.
 * 
 * @throws {TypeError} If the expression is not a function.
 */
Hooray.prototype.find = function (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    
    for (i=0; i<this.length; i++) {
        if (expression(this[i])) return this [i];
    }
    return undefined;
}


/**
 * Itearates an hooray and searchs if an item is included or not in a hooray.
 * 
 * @param {Function} expression The item that want to know if is included on the hooray.
 * @param {Number} start Optional. The starting position to start searching.
 *                       Default 0. If start is not a valid number, or < 0, Default starting.
 * 
 * @returns {Boolean} True if item's included on hooray, false if not.
 */
Hooray.prototype.includes = function (item) {

    var start = arguments[1] || 0;
    if (typeof(start) !== "number") start = 0;
    start = start < 0 ? 0 : start;

    for (i=0; i<this.length; i++) {
        if (this[i]===item)  return true
    }
    return false;
}

Hooray.prototype.indexOf = function (item) {
    var start = arguments[1] || 0;

    if (typeof(start) !== "number") start=0;

    start = start < 0 ? this.length + start : start;

    for (var i=start; i<this.length; i++) {
        if (this[i]===item) return i;
    }
    return -1;
}

Hooray.prototype.reduce = function (expression) {
    
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    if (this.length === 0) throw TypeError("Reduce of empty hooray with no initial value");
    
    var result=0;
    for (i=0; i<this.length; i++) {
        result=expression(result,this[i]);
    }
    
    return result;
}

Hooray.prototype.reverse = function () {
     
    var ini=0;
    var fin=this.length-1;
    var item;
    
    while (ini<fin) {
        item=this[fin];
        this[fin]=this[ini];
        this[ini]=item;
        
        ini++;
        fin--;
    }
}

Hooray.prototype.slice = function () {

    var start = arguments[0] || 0;
    if (typeof(start) !== "number") start = 0;
    start = start < 0 ? this.length + start : start;
    var end = arguments[1] || this.length;
    if (typeof(end) !== "number") end = 0;
    end = end < 0 ? this.length + end : end;

    if (end > this.length) end = this.length;

    var newHooray = new Hooray ();   

    for (var i=start; i<end; i++) {
        newHooray[newHooray.length++]=this[i];
    }
    return newHooray;
}

Hooray.prototype.some = function (expression) {
    
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    
    
    for (i=0; i<this.length; i++) {
        if (expression(this[i])) return true;
    }
    return false;
}

Hooray.prototype.sort = function () {
    
    var sorted = false;
    var aux;

    var expression = arguments [0] || (function (a,b) { return b < a ? 1 : -1 });

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');


    while (!sorted) {
        sorted = true;
        for (var i=0; i<this.length-1; i++){
            
            if ((expression(this[i].toString().charCodeAt(0),this[i+1].toString().charCodeAt(0))>0)) {
                aux = this[i+1];
                this[i+1] = this[i];
                this[i] = aux;
                sorted = false;
            }
        }
    }
}

/**
 * Add in the array the items from the indicated index and returns the deleted Items, if deleteCount > 0.
 * 
 * @param {Number} start The starting position in the array
 * @param {Number} deleteCount Optional. Number of items that will be deleted in the array
 * @param {*} - Optional. Item1 ... ItemX - Items that will be added to the array. 
 *              When omitted, nothing is added, but #deleteCount items will be deleted since start index
 */

 Hooray.prototype.splice = function (start) {


    var deleteCount = arguments [1] || 0; 
    if (start < 0) start = (this.length)+start;
    if (deleteCount > (this.length+start)) deleteCount=this.length+start;

    var deleted = new Hooray();
    if (start >= this.length) 
        start = this.length;
    if (start+deleteCount > this.length) 
                    deleteCount=this.length-start;
    if (start===(this.length-1)) 
                    this.length--;


    if (deleteCount) {
        for (var i=start; i<start+deleteCount; i++) {
            deleted[deleted.length++]=this[i];
        }
    
        for (var i=start; i<this.length; i++) {
            if (i+deleteCount<this.length)
                this[i]=this[i+deleteCount];
        }
        
        for (var i=0; i<deleteCount; i++)
            delete this[this.length-deleteCount+i];

        this.length-=deleteCount;
    }

    if (arguments.length>2) {
        for (var i=this.length-1; i>=start; i--) {
            this[i+(arguments.length-2)]=this[i];
        }
        for (i=0; i<(arguments.length-2); i++) {
            this[start+i]=arguments[i+2];
            this.length++;
        }
    }
                
    return deleted;
}

/**
 * Converts an Array into a String.
 *
 *  
 */
Hooray.prototype.toString = function () {
    var string='';
    
    for (var i=0; i<this.length; i++) {
        string+=this[i];
        if (i<this.length-1) string+=',';
    }
    return string;
}