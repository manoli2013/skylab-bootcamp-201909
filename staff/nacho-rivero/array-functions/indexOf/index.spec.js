describe('indexOf', function() {
  
    it('should fail on undefined array', function() {
        
      var array;

      expect(function() { indexOf(array, 'legolas'); }).toThrowError(TypeError, 'undefined is not an array');

    });

    it('should throw an error when others types different to array are passed', function() {

      expect(function() { indexOf('JL picard', 'Darth Vader'); }).toThrowError('JL picard is not an array');
      expect(function() { indexOf(123, 'Darth Vader'); }).toThrowError('123 is not an array');

    });

    it('should throw error an element non-string or number', function() {

      var array = [1, 2, 3, 'aragorn', 'gimli', 'legolas'];
      var space = function(a) { return a + ' ' }

      expect(function() { indexOf(array, space); }).toThrowError(TypeError, 'function is not a string or a number');
      expect(function() { indexOf(array, [1, 2, 3]); }).toThrowError(TypeError, 'object is not a string or a number');
      
    });
   });
