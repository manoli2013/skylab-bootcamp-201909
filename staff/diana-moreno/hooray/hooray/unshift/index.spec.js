describe('unshift', function() {
  it('should add a single item to the first position of the array', function() {
    var hooray = new Hooray('a', 'b', 'c');
    var result = hooray.unshift('d');
    var expected = ['d', 'a', 'b', 'c'];

    expect(hooray[0]).toBe('d');
    expect(hooray.length).toBe(4);
    expect(result).toBe(4);
    expect(hooray[0]).not.toBe('a');
  });

  it('should add a multiple items to the first positions of the array', function() {
    var hooray = new Hooray('a', 'b', 'c');
    var result = hooray.unshift('d', 'e', 'f');

    expect(result).toBe(6);
    expect(hooray.length).toBe(6);
    expect(hooray).toEqual(new Hooray('d', 'e', 'f', 'a', 'b', 'c'));
  });

  it('should modify the original array', function() {
    var hooray = new Hooray('a', 'b', 'c');
    hooray.unshift(3, 5);

    expect(hooray).toEqual(new Hooray(3, 5, 'a', 'b', 'c'));
    expect(hooray.length).toBe(5);
    expect(hooray.length).not.toBe(3);
  });

  it('should return the array length', function() {
    var hooray = new Hooray('a', 'b', 'c');
    var result = hooray.unshift(3, 5);

    expect(result).toBe(5);
    expect(typeof result).toBe('number');
  });

  it('should return 0 when an empty array is passed', function() {
    var hooray = new Hooray();
    var result = hooray.unshift();

    expect(result).toEqual(0);
  });
});