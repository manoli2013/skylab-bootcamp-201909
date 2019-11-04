describe('shift', function(){

    it('should fail when others types different to array are passed', function() {

        var array;
        
        expect(function() { reverse('Lt O Neal'); }).toThrowError(TypeError, 'Lt O Neal is not an array');
        expect(function() { reverse(123); }).toThrowError(TypeError, '123 is not an array');
        expect(function() { shift(array); }).toThrowError(TypeError, 'undefined is not an array');

      });

})