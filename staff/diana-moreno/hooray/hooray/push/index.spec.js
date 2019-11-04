describe('push', function() {
  it('should push a single item', function() {
    var hooray = new Hooray('a', 'b', 'c');

    expect(hooray.push('d')).toBe(4);
    expect(hooray.length).toBe(4);
    expect(hooray[hooray.length - 1]).toBe('d');
    expect(hooray).toEqual(new Hooray('a', 'b', 'c', 'd'));
  });

  it('should push multiple items', function() {
    var hooray = new Hooray('a', 'b', 'c');
    var expected = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

    expect(hooray.push('d', 'e', 'f', 'g', 'h', 'i', 'j', 'k')).toBe(11);
    expect(hooray.length).toBe(11);
    expect(hooray).toEqual(new Hooray('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'));
  });

  it('should work properly with received empty array', function() {
    var hooray = new Hooray();
    var expected = [234];
    hooray.push(234);

    expect(hooray.length).toBe(1);
    expect(hooray).toEqual(new Hooray(234));
  });

  it('should modify the original array', function() {
    var hooray = new Hooray('a', 'b', 'c');
    var original = ['a', 'b', 'c']
    hooray.push(3, 5);

    expect(hooray.length).not.toBe(original.length);
  });

  it('should return the array length', function() {
    var hooray = new Hooray('a', 'b', 'c');
    var result = hooray.push(3, 5);

    expect(result).toBe(5);
  });
});