/**
 * Sort the elements in the hooray (from low to high)
 * 
 * @returns The hooray
 */
Hooray.prototype.sort = function sort(){
    for (var i = 0; i < this.length; i++) {
        for (var j = i+1; j < this.length; j++) {
            if(this[i] > this[j]){
                var c = this[i];
                this[i] = this[j];
                this[j] = c;
            }
        }
    }
    return this;
};