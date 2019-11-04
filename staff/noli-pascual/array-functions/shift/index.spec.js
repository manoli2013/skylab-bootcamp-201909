describe('shift', function () {
    
    it('should eliminate first item of the array given and return it', function() {
        var array = ['Pol', 'Jordi', 'Noa'];

        var result = shift(array);

        expect(result).toBe('Pol');

        expect(array.length).toBe(2);

    })

    it('should fail on non array as parameter', function() {
      
       
        expect(function() { shift()}).toThrowError('undefined is not an array');
        expect(function() { shift(1)}).toThrowError('1 is not an array');
        expect(function() { shift(true)}).toThrowError('true is not an array');
        
    })
});

