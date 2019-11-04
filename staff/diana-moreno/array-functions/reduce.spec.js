describe('reduce', function() {
  it('should multiply numeric array without initial value', function() {
    var array = [1, 2, 3, 4];
    var fn = function(accumulator, value) {
      return accumulator * value;
    };

    expect(reduce(array, fn)).toBe(24);
  });

  it('should add numeric array without initial value', function() {
    var array = [1, 2, 3, 4];
    var fn = function(accumulator, value) {
      return accumulator + value;
    };

    expect(reduce(array, fn)).toBe(10);
  });

  it('should work with strings, concatenating all the strings', function() {
    var array = ['h', 'a', 'a', 'b', 'c', 'b'];
    var fn = function(accumulator, value) {
      return accumulator + value;
    };

    expect(reduce(array, fn)).toBe('haabcb');
  });

  it('should work with mix of numbers and strings concatenating the strings to the numbers', function() {
    var array = [1, 2, 'a', 'b'];
    var fn = function(accumulator, value) {
      return accumulator + value;
    };

    expect(reduce(array, fn)).toBe('3ab');
  });

  it('should fail on empty array', function() {
    var array = [];
    var fn = function(accumulator, value) {
      return accumulator + value;
    };

    expect(function() { reduce(array, fn); }).toThrowError(TypeError, 'Reduce of empty array with no initial value');
  });

  it('should fail on non-function expression', function() {
    var array = [1, 2, 'a', 'b'];

    expect(function() { reduce(array, [1, 2]); }).toThrowError(TypeError, '1,2 is not a function');
    expect(function() { reduce(array, true); }).toThrowError(TypeError, 'true is not a function');
    expect(function() { reduce(array, 1); }).toThrowError(TypeError, '1 is not a function');
  });
});
