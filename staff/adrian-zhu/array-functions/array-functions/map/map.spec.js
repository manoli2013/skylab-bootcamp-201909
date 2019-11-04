describe('map', function () {
  
    it('should succeed on correct array and expression, adding all arr', function () {
      var arr = [1, 2, 3];
      var result = 0;
      var add = function (number) { result += number; };

      map(arr, add);

      expect(result).toBe(6);
  });

  it('should succeed on correct array and expression, concatenating all arr', function () {
      var arr = [1, 2, 3];
      var result = '';
      var concatenate = function (number) { result += number; };

      map(arr, concatenate);

      expect(result).toBe('123');
  });


 it('should succeed on correct array and expression, multiplying all numbers by 10', function () {
    var a = [1, 2, 3, 4];
    var result = map(a, function(number) {return number * 10 });


    var expected = [10, 20, 30, 40];

    expect(result).toEqual(expected);
});

  it('should fail on undefined array', function () {
      var array; 
      var expression = console.log;

      expect(function() { map(array, expression); }).toThrowError(TypeError, 'undefined is not an array');
  });

  it('should fail on undefined expression', function () {
      var array = [1, 2, 3];
      var expression; 

      expect(function() { map(array, expression); }).toThrowError(TypeError, 'undefined is not a function');
  });

  it('should fail on non-function expression', function () {
      var array = [1, 2, 3];

      expect(function () { map(array, undefined); }).toThrowError(TypeError, 'undefined is not a function');
      expect(function() { map(array, true); }).toThrowError('true is not a function');
      expect(function() { map(array, 1); }).toThrowError('1 is not a function');
  });

});

