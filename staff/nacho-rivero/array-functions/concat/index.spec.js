describe('concat', function(){

    it('should fail on undefined array', function(){
        var array;

        expect(function(){filter(array)}).toThrowError(TypeError, 'undefined is not an array');
    });

})