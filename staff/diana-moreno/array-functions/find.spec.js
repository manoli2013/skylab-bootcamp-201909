describe('find', function() {
  it('should find the fist element that satisfies the function', function() {
    var array = [6, 7, 8, 9, 10];
    var fn = function(x) { return x >= 7; };

    expect(find(array, fn)).toBe(7);
    expect(array.length).toBe(5);
    expect(array[array.length - 1]).toBe(10);
  });

  it('should fail finding in the array', function() {
    var array = [3, 7, 8, 9, 10];
    var fn = function(x) { return x > 11; };

    expect(find(array, fn)).toBe(undefined);
    expect(array.length).toBe(5);
    expect(array[array.length - 1]).toBe(10);
  });


  it('should not modify the original array', function() {
    var array = [6, 7, 8, 9, 10];
    var expected = [6, 7, 8, 9, 10];
    var fn = function(x) { return x > 5; };
    find(array, fn);

    expect(array.length).toBe(expected.length);
    expect(array).toEqual(expected);
  });

  it('should fail on undefined array', function() {
    var array;
    var fn = function(x) { return x > 5; };

    expect(function() { find(array, fn); }).toThrowError(TypeError, 'undefined is not an array');
  });

  it('should return undefined on empty array received', function() {
    var array = [];
    var fn = function(x) { x > 5; };

    expect(find(array, fn)).toBe(undefined);
  });

  it('should throw an error when others types different to array are passed', function() {
    var fn = function(x) { return x > 5; };

    expect(function() { find('hello', fn); }).toThrowError('hello is not an array');
    expect(function() { find(1, fn); }).toThrowError('1 is not an array');
  });

  it('should throw an error when others types different to function are passed', function() {
    var array = [3, 7, 8, 9, 10];

    expect(function() { find(array, [1, 2, 3]); }).toThrowError('1,2,3 is not a function');
    expect(function() { find(array, 'hello'); }).toThrowError('hello is not a function');
    expect(function() { find(array, 1); }).toThrowError('1 is not a function');
    expect(function() { find(array, true); }).toThrowError('true is not a function');
  });
});
