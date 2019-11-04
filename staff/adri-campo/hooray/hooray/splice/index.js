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