describe('findIndex', function(){

    it('should fail if is not an array', function(){
        var array = 123;
        var expression = function(a) { a > 1; };

        expect(function(){ find(array, expression); }).toThrowError(TypeError, '123 is not an array');
    });
})