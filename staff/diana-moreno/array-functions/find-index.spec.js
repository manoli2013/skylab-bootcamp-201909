describe('findIndex', function() {
  it('should return the fist element that satisfies the function', function() {
    var array = [6, 7, 8, 9, 10];
    var fn = function(x) { return x >= 7; };

    expect(findIndex(array, fn)).toBe(1);
    expect(array.length).toBe(5);
    expect(array[array.length - 1]).toBe(10);
  });

  it('should fail finding in the array', function() {
    var array = [3, 7, 8, 9, 10];
    var fn = function(x) { return x > 11; };

    expect(findIndex(array, fn)).toBe(-1);
    expect(array.length).toBe(5);
    expect(array[array.length - 1]).toBe(10);
  });

  it('should not modify the original array', function() {
    var array = [6, 7, 8, 9, 10];
    var expected = [6, 7, 8, 9, 10];
    var fn = function(x) { return x > 5; };
    findIndex(array, fn);

    expect(array.length).toBe(expected.length);
    expect(array).toEqual(expected);
  });

  it('should return a number', function() {
    var array = [6, 7, 8, 9, 10];
    var fn = function(x) { return x > 7; };
    let result = findIndex(array, fn);

    expect(typeof result).toBe('number');
    expect(result).toBe(2);
  });

  it('should fail on undefined array', function() {
    var array;
    var fn = function(x) { return x > 5; };

    expect(function() { findIndex(array, fn); }).toThrowError(TypeError, 'undefined is not an array');
  });

  it('should return undefined on empty array received', function() {
    var array = [];
    var fn = function(x) { return x > 5; };

    expect(findIndex(array, fn)).toBe(-1);
  });

  it('should fail when others types different to array are passed', function() {
    var fn = function(x) { return x > 5; };

    expect(function() { findIndex('hello', fn); }).toThrowError(TypeError, 'hello is not an array');
    expect(function() { findIndex(1, fn); }).toThrowError(TypeError, '1 is not an array');
  });

  it('should fail when others types different to function are passed', function() {
    var array = [3, 7, 8, 9, 10];

    expect(function() { findIndex(array, [1, 2, 3]); }).toThrowError(TypeError, '1,2,3 is not a function');
    expect(function() { findIndex(array, 'hello'); }).toThrowError(TypeError, 'hello is not a function');
    expect(function() { findIndex(array, 1); }).toThrowError(TypeError, '1 is not a function');
    expect(function() { findIndex(array, true); }).toThrowError(TypeError, 'true is not a function');
  });
});
