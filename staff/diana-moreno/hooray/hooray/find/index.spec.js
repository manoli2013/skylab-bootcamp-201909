describe('find', function() {
  it('should find the fist element that satisfies the function', function() {
    var hooray = new Hooray(6, 7, 8, 9, 10);
    var array = [6, 7, 8, 9, 10];
    var fn = function(x) { return x >= 7; };

    expect(hooray.find(fn)).toBe(7);
    expect(hooray.length).toBe(5);
    expect(array[array.length - 1]).toBe(10);
  });

  it('should fail finding in the array', function() {
    var hooray = new Hooray(3, 7, 8, 9, 10);
    var array = [3, 7, 8, 9, 10];
    var fn = function(x) { return x > 11; };

    expect(hooray.find(fn)).toBe(undefined);
    expect(array.length).toBe(5);
    expect(array[array.length - 1]).toBe(10);
  });

  it('should not modify the original array', function() {
    var hooray = new Hooray(6, 7, 8, 9, 10);
    var array = [6, 7, 8, 9, 10];
    var expected = [6, 7, 8, 9, 10];
    var fn = function(x) { return x > 5; };
    hooray.find(fn);

    expect(hooray.length).toBe(expected.length);
    expect(array).toEqual(expected);
  });

  it('should return undefined on empty array received', function() {
    var hooray = new Hooray();
    var fn = function(x) { return x > 5; };

    expect(hooray.find(fn)).toBe(undefined);
  });

  it('should throw an error when others types different to function are passed', function() {
    var hooray = new Hooray(3, 7, 8, 9, 10);

    expect(function() { hooray.find([1, 2, 3]); }).toThrowError('1,2,3 is not a function');
    expect(function() { hooray.find('hello'); }).toThrowError('hello is not a function');
    expect(function() { hooray.find(1); }).toThrowError('1 is not a function');
    expect(function() { hooray.find(true); }).toThrowError('true is not a function');
  });
});
