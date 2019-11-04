// --------------------------SLICE--------------------------------------
/**
 * returns a  copy of a portion of an array into a 
 * new array object selected from begin to end
 * 
 * @param {*} array origin array
 * @param {*} begin start index 
 * @param {*} end  end index
 * 
 * @returns{new array} new array with the values copyed
 * 
 */
Hooray.prototype.slice = function slice(begin, end) {
    
    var hoorayAux = new Hooray();

    if (begin > this.length) return hoorayAux;

    begin = begin || 0;
    if (begin < 0){
        begin = this.length + begin;
        if (begin < 0) begin = 0;
    };
    end = end || this.length;
    end = end < 0? this.length + end : end;

    for (var i = begin; i < end; i++)
	   	hoorayAux[i - begin] = this[i];

	hoorayAux.length = end < begin? 0 : end - begin;
    
    return hoorayAux;
};