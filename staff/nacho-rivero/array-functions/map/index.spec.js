describe('map', function() {

    it('should throw error on different type to array passed', function() {

      var array = [1, 2, 3, 'aragorn', 'gimli', 'legolas'];
      var expression = function(a) { return a + ' ' }

      expect(function() { map('merry', expression) }).toThrowError(TypeError, 'merry is not an array');
      expect(function() { map(123, expression); }).toThrowError(TypeError, '123 is not an array');
 
    });

    it('should fail on undefined array', function() {
      var array;
      var expression = function(a) { return a + ' ' }

      expect(function() { map(array, expression); }).toThrowError(TypeError, 'undefined is not an array');
    });

   })

   


