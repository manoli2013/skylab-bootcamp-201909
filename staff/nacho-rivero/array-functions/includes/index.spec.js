describe('includes', function(){

    it('should fail if is not an array', function(){
        var array = 123;
        var value = 'aragorn';

        expect(function(){ find(array, value); }).toThrowError(TypeError, '123 is not an array');
    });

})