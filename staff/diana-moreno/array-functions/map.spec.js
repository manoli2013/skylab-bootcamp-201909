describe('map', function() {
  it('should map the array', function() {
    var array = [1, 2, 3, 4];
    var fn = function(x) { return x * 2; };
    var result = map(array, fn);
    var expected = [2, 4, 6, 8]

    var fn2 = function(x) { return x * 3; };
    var result2 = map(array, fn2);
    var expected2 = [3, 6, 9, 12];

    expect(result).toEqual(expected);
    expect(result2).toEqual(expected2);
  });

  it('should not modify the original array', function() {
    var array = [1, 2, 3, 4];
    var fn = function(x) { return x * 2; };
    map(array, fn);

    expect(array.toString()).toBe('1,2,3,4');
  });

  it('should return an empty array if receive an empty array',
    function() {
      var array = [];
      var fn = function(x) { return x * 2; };
      let result = map(array).length

      expect(result).toBe(0);
    });

  it('should fail on non-function expression', function() {
    var array = [1, 2, 3];

    expect(function() { map(array, [1, 2]); }).toThrowError(TypeError, '1,2 is not a function');
    expect(function() { map(array, true); }).toThrowError(TypeError, 'true is not a function');
    expect(function() { map(array, 1); }).toThrowError(TypeError, '1 is not a function');
  });

  it('should fail on different type to array passed', function() {
    var fn = function(x) { return x * 2; };

    expect(function() { map('hello', fn); }).toThrowError(TypeError, 'hello is not an array');
    expect(function() { map(1, fn); }).toThrowError(TypeError, '1 is not an array');
    expect(function() { map(true, fn); }).toThrowError(TypeError, 'true is not an array');
  });

  it('should fail on undefined array', function() {
    var array;
    var fn = function(x) { return x * 2; };

    expect(function() { forEach(array, fn); }).toThrowError(TypeError, 'undefined is not an array');
  });
});
