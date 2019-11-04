// --------------------------FILL--------------------------------------
    /**
     * Modifies all the elements of an array from a start index 
     * (default zero) to an end index (default array length) with a static value.
     * 
     * @param {*} value static value
     * @param {*} begin start index 
     * @param {*} end  end index
     * 
     */
    Hooray.prototype.fill  = function(value, begin, end) {
        if (begin > this.length) return;
        
        begin = begin || 0;
        if (begin < 0){
            begin = this.length + begin;
            if (begin < 0) begin = 0;
        };
        end = end || this.length;
        end = end < 0? this.length + end : end; 
           
        for (var i = begin; i < end; i++)
            this[i] = value;
    };