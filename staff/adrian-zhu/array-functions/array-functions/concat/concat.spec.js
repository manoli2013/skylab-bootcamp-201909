 describe('concat', function(){

    
    it('Should succeed the operation, merging all arrays selected into one new array', function(){
        var array1, array2, array3, result, expected;

        array1 = [1, 2, 3, 4];
        array2 = [5, 6, 7, 8];
        array3 = [9, 10, 11, 12, 13 ,14];

        expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        result = concat(array1, array2, array3);

        expect(result).toEqual(expected);
    });


    it('Should return all the elements with only one item introduced', function()
    {
        var array, result, expected;

        array=[1, 2, 3];
        expected=[1, 2, 3];
        result = concat(array);

        expect(result).toEqual(expected);
    });

    
    it('Should return an empty array in case of empty array', function(){   
        var array, result, expected;

        array=[];
        expected= [];
        result=concat(array);
    
        expect(result).toEqual(expected);
    });

    
    
    it('Should return success in case of concatenating values to an array', function(){   
        var array, result, expected;

        array=['a','b','c'];
       
        expected= ['a','b','c', 1, '2', '3'];
        result=concat(array, 1, '2', '3');
        
        
        expect(result).toEqual(expected);

    });
    

    
    it('Should return sucess in case of concatenating nested arrays', function(){   

        var array1, array2, result, expected;

        array1=[[1, 'a']];
        array2=[2, [3, 'b']]
        expected= [[1, 'a'],2, [3, 'b']];
        result=concat(array1, array2);
        
        expect(result).toEqual(expected);
        
        
    });

    it('should fail on non-array input', function () {
        expect(function () { reverse(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { reverse(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { reverse(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { reverse('a'); }).toThrowError(TypeError, 'a is not an array');
    });
    
});