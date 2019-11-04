describe('join', function(){
    
    it('Should succeed returning a new string by joining all of the elements in an array', function(){

        var arr = [10,20,30,40];
        var result;
        var expected;

        expected = ("10203040");
        result = join(arr, '');

        expect(result).toEqual(expected);
    });
    
    it('Should succeed the operation, returning a new string by joining all of the elements with a separator ","' , function() {
        
        var arr = [10,20,30,40];
        var result;
        var expected;

        result = join(arr, ',');
        expected = "10,20,30,40";
        
        expect(result).toEqual(expected);
    });

     
    it('Should return the same string by joining all of the elements in an array with non-specify command', function() {
        var arr = [10,20,30,40];
        var result;
        var expected;

        result = join(arr);
        expected = "10,20,30,40";
        
        expect(result).toEqual(expected);
    }); 

    it('Should succeed and type of result should be string', function() {
        var arr = [10,20,30,40];
        var result;
        var expected;
        
        result = join(arr);
        expected = typeof arr;

        expect(typeof result).toEqual(typeof expected);
    }); 

    
    it('should succeed the operation, returning the same array´s values but in string introducing undefined as separator', function () {
        var arr = [10,20,30,40];
        var result;
        var expected;
        
        result = join(arr, undefined);
        expected = "10,20,30,40"

        expect(result).toEqual(expected); 

    });

    it('should fail on first parameter non-array', function () {
        expect(function () { join(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { join(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { join(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { join('a'); }).toThrowError(TypeError, 'a is not an array');
    });
    
    
});