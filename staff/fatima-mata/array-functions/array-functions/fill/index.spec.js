describe('fill', function () {

    it('should fill the function with a value', function () {

        var array = [1, 3, 4, 6, 7, 8, 6];
        fill(array, 7);
        
        expect(array).toEqual([7,7,7,7,7,7,7]);
    });

    it('should fill the function with a value and aIndex', function () {

        var array = [1, 3, 4, 6, 7, 8, 6];
        var a = 3;
        fill(array, 7, a);
        
        expect(array).toEqual([1,3,4,7,7,7,7]);       
    });

    it('should fill the function with a value, aIndex and bIndex', function () {

        var array = [1, 3, 4, 6, 7, 8, 6];
        var a = 3;
        var b = 6;
        fill(array, 7, a, b);
       
        expect(array).toEqual([1,3,4,7,7,7,6]);        
    });

    it('should fill with undefined when item is not declared', function(){

        var array = [1, 3];
        fill(array);
        
        expect(array).toEqual([undefined,undefined]);
    });

    it('should fail if array is not an array', function () {

        var array; 
        var item = 3;

        expect(function() { fill(array,item);}).toThrowError(TypeError, array + ' is not an array');
    });

    it('should fail on null array', function () {
        
        var array = null; 
        var item = 3;

        expect(function() { fill(array,item);}).toThrowError(TypeError, array + ' is not an array');
    });
});