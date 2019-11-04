describe('filter', function() {
  it('should work correctly and no modify the original array', function() {
    var array = [1, 2, 3, 4];
    var fn = function(x) { return x > 2; };
    var expected = [3, 4];
    var result = filter(array, fn);

    expect(result).toEqual(expected);
  });

  it('should return an empty array if receive an empty array',
    function() {
      var array = [];
      var fn = function(x) { return x * 2; };
      var result = filter(array, fn);

      expect(result.length).toBe(0);
    });

  it('should fail on undefined array', function() {
    var array;
    var fn = function(x) { return x * 2; };

    expect(function() { filter(array, fn); }).toThrowError(TypeError, 'undefined is not an array');
  });

  it('should fail on non-function expression', function() {
    var array = [1, 2, 3];

    expect(function() { filter(array, [1, 2]); }).toThrowError(TypeError, '1,2 is not a function');
    expect(function() { filter(array, true); }).toThrowError(TypeError, 'true is not a function');
    expect(function() { filter(array, 1); }).toThrowError(TypeError, '1 is not a function');
  });

  it('should fail on different type to array passed', function() {
    var fn = function(x) { return x * 2; };

    expect(function() { filter('hello', fn); }).toThrowError(TypeError, 'hello is not an array');
    expect(function() { filter(1, fn); }).toThrowError(TypeError, '1 is not an array');
    expect(function() { filter(true, fn); }).toThrowError(TypeError, 'true is not an array');
  });
});
