describe('filter', function () {

    it ('shoult return the items greater than 3', function () {

        var array = [1,2,3,4,5,6,7,8,9,0];
        var expresion = function (i) { return (i>3);}
        
        var results = filter(array,expresion);
        var test = [4,5,6,7,8,9];

        expect(results).toEqual(test);
    })


    it ('should return an empty Hooray', function () {

        var array = [1,2,3,4,5,6,7,8,9,0];
        var expresion = function (i) { return (i<0);}
        
        var results = filter(array,expresion);
        var test = [];

        expect(results).toEqual(test);
    })

    it ("shouldn't modify the original Hooray", function () {

        var array = [1,2,3,4,5,6,7,8,9,0];
        var expresion = function (i) { return (i>5);}
        
        var results = filter(array,expresion);
        var test = [1,2,3,4,5,6,7,8,9,0];

        expect(array).toEqual(test);
        expect(array.length).toBe(10);
    })

    it ('should throw a Type error on a non-function provided as a parameter', function () {

        var array = [2,4,6];

        expect (function () { filter(array,2)}).toThrowError(TypeError,'2 is not a function');
        expect (function () { filter(array,"a")}).toThrowError(TypeError,'a is not a function');
        expect (function () { filter(array,)}).toThrowError(TypeError,'undefined is not a function');

    })
})