describe('filter', function(){

    it('should be a valid array', function(){

        var condition = function(a) { return a + 2*a; };

        expect(function(){ filter(123, condition)}).toThrowError(TypeError, '123 is not an array');
        expect(function(){ filter('123', condition)}).toThrowError(TypeError, '123 is not an array');

    });

    it('should condition be a function', function(){
        var array = [1, 2, 3];

        expect(function(){ filter(array, 123)}).toThrowError(TypeError, '123 is not a function');
        expect(function(){ filter(array, '123')}).toThrowError(TypeError, '123 is not a function');

    });

   
})