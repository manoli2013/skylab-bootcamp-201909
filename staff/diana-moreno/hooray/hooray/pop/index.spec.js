describe('hooray.pop', function() {
  it('should return the deleted item', function() {
    var hooray = new Hooray('a', 'b', 'c');

    expect(hooray).toEqual(new Hooray('a', 'b', 'c'));
    expect(hooray.pop()).toBe('c');
    expect(hooray[0]).toBe('a');
    expect(hooray[1]).toBe('b');
    expect(hooray[2]).not.toBe('c');
  });

  it('should modify the original array', function() {
    var hooray = new Hooray('a', 'b', 'c');
    hooray.pop();
    var expected = ['a', 'b'];

    expect(hooray.length).toBe(expected.length);
    expect(hooray[hooray.length - 1]).not.toBe('c');
    expect(hooray).not.toEqual(new Hooray('a', 'b', 'c'));
  });

  it('should return undefined when an empty array is passed', function() {
    var hooray = new Hooray();
    var result = hooray.pop();

    expect(result).toBe(undefined);
  });
});