describe('sort', function() {
  it('should sort the array ascending', function() {
    var array = [5, 6, 2, 4, 9, 0];
    var expected = [0, 2, 4, 5, 6, 9];

    var fn = function(a, b) { return a - b };
    sort(array, fn);
    expect(array).toEqual(expected);

    var fn2 = function(a, b) { return b === a };
    sort(array, fn2);
    expect(array).toEqual(expected);

    sort(array);
    expect(array).toEqual(expected);
  });

  it('should sort the array descending', function() {
    var array = [5, 6, 2, 4, 9, 0];
    var fn = function(a, b) { return b - a };
    sort(array, fn);
    var expected = [9, 6, 5, 4, 2, 0];

    expect(array).toEqual(expected);
  });

  it('should modify the original array', function() {
    var originalArray = [1, 2, 3, 4];
    var array = [1, 2, 3, 4];
    var fn = function(a, b) { return b - a };
    sort(array, fn);

    expect(array).not.toEqual(originalArray);
  });

  it('could receive a function or not, if not, sorts ascending', function() {
    var array = [5, 6, 2, 4, 9, 0];
    var expected = [0, 2, 4, 5, 6, 9];
    sort(array);

    expect(array).toEqual(expected);
  })

  it('should return an empty array if receive an empty array',
    function() {
      var array = [];
      let arrLength = sort(array).length;

      expect(arrLength).toBe(0);
    });

  it('should fail on undefined array', function() {
    var array;

    expect(function() { sort(array); }).toThrowError(TypeError, 'undefined is not an array');
  });

  it('should fail on non-function expression', function() {
    var array = [1, 2, 3, 4];

    expect(function() { sort(array, [1, 2]); }).toThrowError(TypeError, '1,2 is not a function');
    expect(function() { sort(array, true); }).toThrowError(TypeError, 'true is not a function');
    expect(function() { sort(array, 1); }).toThrowError(TypeError, '1 is not a function');
  });

  it('should fail on different type to array passed', function() {
    var fn = function(a, b) { return b - a; };

    expect(function() { sort('hello'); }).toThrowError(TypeError, 'hello is not an array');
    expect(function() { sort(1, fn); }).toThrowError(TypeError, '1 is not an array');
    expect(function() { sort(true, fn); }).toThrowError(TypeError, 'true is not an array');
  });
});
