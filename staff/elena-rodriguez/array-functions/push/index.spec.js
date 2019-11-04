describe('push' , function(){
    it('should add the new elements at the end of the array and return the length of the array', function() {
        var myArray = ['hello', 'world'];
        var myNewElements = 'Its saturday';
        var result = push(myArray, myNewElements);
        var test = 3;
        expect(result).toEqual(test);
        expect(myArray).toEqual = ['hello', 'world', 'Its saturday'];
    });

    it('should fail on undefined array', function () {
        var array;
        var myNewElements = [1,2];
        expect(function() { push (array, myNewElements); }).toThrowError(TypeError, array + ' is not an array');
    });

});