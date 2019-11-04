describe('every', function() {
  it('should pass all the requirements of the function', function() {
    var array = [6, 7, 8, 9, 10];
    var fn = function(x) { return x > 5; };

    expect(every(array, fn)).toBe(true);
    expect(array.length).toBe(5);
    expect(array[array.length - 1]).toBe(10);
  });

  it('should return a boolean', function() {
    var array = [3, 7, 8, 9, 10];
    var fn = function(x) { return x > 1; };

    expect(every(array, fn)).toBe(true);
  });

  it('should fail with the requirements of the function', function() {
    var array = [3, 7, 8, 9, 10];
    var fn = function(x) { return x > 5; };

    expect(every(array, fn)).toBe(false);
    expect(array.length).toBe(5);
    expect(array[array.length - 1]).toBe(10);
  });

  it('should throw an error when others types different to array are passed', function() {
    var fn = function(x) { return x > 5; };

    expect(function() { every('hello', fn); }).toThrowError(TypeError, 'hello is not an array');
    expect(function() { every(1, fn) }).toThrowError(TypeError, '1 is not an array');
  });

  it('should not modify the original array', function() {
    var array = [6, 7, 8, 9, 10];
    var expected = [6, 7, 8, 9, 10];
    var fn = function(x) { return x > 5; };
    every(array, fn);

    expect(array.length).toBe(expected.length);
    expect(array).toEqual(expected);
  });

  it('should fail on undefined array', function() {
    var array;
    var fn = function(x) { return x > 5; };

    expect(function() { every(array, fn); }).toThrowError(TypeError, 'undefined is not an array');
  });

  it('should return true on empty array received', function() {
    var array = [];
    var fn = function(x) { return x > 5; };

    expect(every(array, fn)).toBe(true);
  });

  it('should throw an error when others types different to function are passed', function() {
    var array = [3, 7, 8, 9, 10];

    expect(function() { every(array, [1, 2, 3]); }).toThrowError(TypeError, '1,2,3 is not a function');
    expect(function() { every(array, 'hello'); }).toThrowError(TypeError, 'hello is not a function');
    expect(function() { every(array, 1); }).toThrowError(TypeError, '1 is not a function');
    expect(function() { every(array, true); }).toThrowError(TypeError, 'true is not a function');
  });
});
