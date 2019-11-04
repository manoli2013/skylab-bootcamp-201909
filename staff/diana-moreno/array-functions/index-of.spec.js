describe('indexOf', function() {
  it('should return the fist element that satisfies the function', function() {
    var array = [6, 7, 8, 9, 10];

    expect(indexOf(array, 8)).toBe(2);
    expect(array.length).toBe(5);
    expect(array[array.length - 1]).toBe(10);
  });

  it('should fail indexOfing in the array', function() {
    var array = [3, 7, 8, 9, 10];

    expect(indexOf(array, 2)).toBe(-1);
    expect(array.length).toBe(5);
    expect(array[array.length - 1]).toBe(10);
  });

  it('should not modify the original array', function() {
    var array = [6, 7, 8, 9, 10];
    var expected = [6, 7, 8, 9, 10];

    indexOf(array, 9);

    expect(array.length).toBe(expected.length);
    expect(array).toEqual(expected);
  });

  it('should work with an empty array', function() {
    var array = [];
    var result = indexOf(array, 5);

    expect(result).toBe(-1);
  });

  it('should fail on undefined array', function() {
    var array;

    expect(function() { indexOf(array, 6); }).toThrowError(TypeError, 'undefined is not an array');
  });

  it('should throw an error when others types different to array are passed', function() {
    expect(function() { indexOf('hello', 1); }).toThrowError('hello is not an array');
    expect(function() { indexOf(1, 'hello'); }).toThrowError('1 is not an array');
  });

  it('should fail on receive an item non-string or number', function() {
    var array = [1, 2, 3];
    var fn = function(x) { return x + 2; }

    expect(function() { fill(array, fn); }).toThrowError(TypeError, 'function is not a string or a number');
    expect(function() { fill(array, [1, 2, 3]); }).toThrowError(TypeError, 'object is not a string or a number');
    expect(function() { fill(array, false); }).toThrowError(TypeError, 'boolean is not a string or a number');
  });
});
