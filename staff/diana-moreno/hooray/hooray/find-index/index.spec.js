describe('findIndex', function() {
  var hooray = new Hooray(6, 7, 8, 9, 10);

  it('should return the fist index that satisfies the function', function() {
    var fn = function(x) { return x >= 7; };

    expect(hooray.findIndex(fn)).toBe(1);
    expect(hooray.length).toBe(5);
    expect(hooray[hooray.length - 1]).toBe(10);
  });

  it('should fail findIndexing in the array', function() {
    var fn = function(x) { return x > 11; };

    expect(hooray.findIndex(fn)).toBe(-1);
    expect(hooray.length).toBe(5);
    expect(hooray[hooray.length - 1]).toBe(10);
  });

  it('should not modify the original array', function() {
    var expected = [6, 7, 8, 9, 10];
    var fn = function(x) { return x > 5; };
    hooray.findIndex(fn);

    expect(hooray.length).toBe(expected.length);
    expect(hooray).toEqual(new Hooray(6, 7, 8, 9, 10));
  });

  it('should return a number', function() {
    var array = [6, 7, 8, 9, 10];
    var fn = function(x) { return x > 7; };
    let result = hooray.findIndex(fn);

    expect(typeof result).toBe('number');
    expect(result).toBe(2);
  });

  it('should return undefined on empty array received', function() {
    var noHooray = new Hooray([]);
    var fn = function(x) { return x > 7; };

    expect(noHooray.findIndex(fn)).toBe(-1);
  });

  it('should throw an error when others types different to function are passed', function() {
    expect(function() { hooray.findIndex([1, 2, 3]) }).toThrowError('1,2,3 is not a function');
    expect(function() { hooray.findIndex('hello') }).toThrowError('hello is not a function');
    expect(function() { hooray.findIndex(1) }).toThrowError('1 is not a function');
    expect(function() { hooray.findIndex(true) }).toThrowError('true is not a function');
  });
});
