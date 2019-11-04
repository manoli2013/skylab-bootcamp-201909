describe('pop', function() {
  it('should return the deleted item', function() {
    var array = ['a', 'b', 'c'];

    expect(pop(array)).toBe('c');
    expect(array.length).toBe(2);
    expect(array[array.length - 1]).toBe('b');
    expect(array[array.length - 2]).toBe('a');
  });

  it('should return undefined when an empty array is passed', function() {
    var array = [];

    expect(pop(array)).toBe(undefined);
  });

  it('should modify the original array', function() {
    var array = ['a', 'b', 'c'];
    pop(array);

    expect(array.toString()).toBe('a,b');
  });

  it('should throw an error when others types different to array are passed', function() {
    var string = 'hello';
    var number = 1;

    expect(function() { pop(string); }).toThrowError(TypeError, 'hello is not an array');
    expect(function() { pop(number); }).toThrowError(TypeError, '1 is not an array');
  });
  it('should fail on undefined array', function() {
    var array;

    expect(function() { forEach(array); }).toThrowError(TypeError, 'undefined is not an array');
  });
});
