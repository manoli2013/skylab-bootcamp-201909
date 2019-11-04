describe('shift', function() {
  it('should remove the first element of the array', function() {
    var hooray = new Hooray('a', 'b', 'c');
    var result = hooray.shift();
    var expected = ['b', 'c'];

    expect(hooray).toEqual(new Hooray('b', 'c'));
    expect(result).toBe('a');
    expect(hooray.length).toBe(2);
    expect(hooray[0]).not.toBe('a');
    expect(hooray[hooray.length - 1]).toBe('c');
    expect(hooray[hooray.length - 2]).toBe('b');
  });

  it('should modify the original array', function() {
    var hooray = new Hooray('a', 'b', 'c');
    var result = hooray.shift();
    var expected = ['b', 'c'];

    expect(hooray.length).toBe(expected.length);
    expect(hooray[0]).not.toBe('a');
  });

  it('should return undefined when an empty array is passed', function() {
    var hooray = new Hooray();
    var result = hooray.shift();

    expect(result).toBe(undefined);
  });
});
