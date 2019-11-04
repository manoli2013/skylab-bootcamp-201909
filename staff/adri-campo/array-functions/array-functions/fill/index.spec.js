describe('fill', function () {
    it('should fill the function with a value', function () {
        var array = [1, 3, 4, 6, 7, 8, 6];
        fill(array, 7);
        result = array.toString();

        expect(result).toBe([7,7,7,7,7,7,7].toString());

    });

    it('should fill the function with a value + startIndex', function () {
        var array = [1, 3, 4, 6, 7, 8, 6];
        var start = 3;
        fill(array, 7, start);
        result = array.toString();

        expect(result).toBe([1,3,4,7,7,7,7].toString());
       
    });

    it('should fill the function with a value + startIndex + endIndex', function () {
        var array = [1, 3, 4, 6, 7, 8, 6];
        var start = 3;
        var end = 6;
        fill(array, 7, start, end);
        result = array.toString();

        expect(result).toBe([1,3,4,7,7,7,6].toString());
        
    });


    it('should fill with undefined when item is not declared', function(){
        var array = [1, 3];
        fill(array);
        result = array.toString();

        expect(result).toBe([undefined,undefined].toString());

    });
    

// ERRORES

    it('should fail if array is NOT an array', function () {
        var array = 3; //= [1, 3, 4, 6, 7, 8, 6];
        var item = 3;

        expect(function() { fill(array,item);}).toThrowError(array + ' is not an array');
    });


    it('should fail on NULL array', function () {
        var array = null; //= [1, 3, 4, 6, 7, 8, 6];
        var item = 3;

        expect(function() { fill(array,item);}).toThrowError(null + ' is not an array');
    });

    
});










