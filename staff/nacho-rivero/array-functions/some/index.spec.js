describe('some', function() {

    it('should throw an error on undefined array', function() {

      var array;
      var expression = function(a) { return a > 1 }

      expect(function() { some(array, expression); }).toThrowError(TypeError, 'undefined is not an array');

    });

    it('should return false on empty array received', function() {

      var array = [];
      var expression = function(a) { return a > 1 }

      expect(some(array, expression)).toBe(false);

    });

   });

   
   