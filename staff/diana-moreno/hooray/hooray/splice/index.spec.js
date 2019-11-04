describe('splice', function() {
  it('should modify the array with the values in the given limits', function() {
    var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    var result = hooray.splice(4, 4);
    var expected = [1, 2, 3, 4, 9, 10];

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(4);
    expect(hooray.length).toBe(6);
    for (var i = 0; i < expected.length; i++)
      expect(hooray[i]).toBe(expected[i]);
  });

  it('should cut the array starting at indexIni to specified final', function() {
    var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    var result = hooray.splice(4, 3);
    var expected = [5, 6, 7];
    var array = [1, 2, 3, 4, 9, 10];

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(3);
    for (var i = 0; i < expected.length; i++)
      expect(hooray[i]).toBe(array[i]);
    for (var i = 0; i < expected.length; i++)
      expect(result[i]).toBe(expected[i]);
  });

  it('should return an empty array if indexIni is longer than the array length', function() {
    var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    var result = hooray.splice(20);
    var expected = [];

    expect(result).toEqual(expected);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(expected.length);
    for (var i = 0; i < expected.length; i++)
      expect(hooray[i]).toBe(expected[i]);
  });

  it('should set deleteCount to array length if the provided value is longer', function() {
    var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    var result = hooray.splice(3, 20);
    var array = [1, 2, 3];
    var expected = [4, 5, 6, 7, 8, 9, 10];

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(7);
    expect(result.length).toBe(expected.length);
    for (var i = 0; i < expected.length; i++)
      expect(hooray[i]).toBe(array[i]);
  })

  it('should cut the array starting at indexIni, if not end given, the end is the final of the array', function() {
    var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    var result = hooray.splice(4);
    var expected = [5, 6, 7, 8, 9, 10];
    var array = [1, 2, 3, 4];

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(expected.length);
    expect(result.length).toBe(6);
    for (var i = 0; i < expected.length; i++)
      expect(hooray[i]).toBe(array[i]);
  });

  it('should not cut the array when specified an item, but if deleteCount is equal to 0, should put the items at indexIni, after the others', function() {
    var hooray = new Hooray('Jan', 'March', 'April', 'June');
    var result = hooray.splice(1, 0, 'Feb');
    var expected = [];
    var array = ['Jan', 'Feb', 'March', 'April', 'June'];

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(expected.length);
    expect(result.length).toBe(0);
    for (var i = 0; i < expected.length; i++)
      expect(hooray[i]).toBe(array[i]);
  });

  it('should replace as many elements as specified in deleteCount at indexIni by items, an then, put the rest', function() {
    var hooray = new Hooray('Jan', 'March', 'April', 'June');
    var result = hooray.splice(2, 1, 'May');
    var expected = ['April'];
    var array = ['Jan', 'March', 'May', 'June'];

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(expected.length);
    expect(result.length).toBe(1);
    for (var i = 0; i < expected.length; i++)
      expect(hooray[i]).toBe(array[i]);
  });

  it('should work properly replacing for multiple items', function() {
    var hooray = new Hooray('angel', 'clown', 'trumpet', 'sturgeon');
    var result = hooray.splice(0, 2, 'parrot', 'anemone', 'blue');
    var expected = ['angel', 'clown'];
    var array = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(expected.length);
    expect(result.length).toBe(2);
    for (var i = 0; i < expected.length; i++)
      expect(hooray[i]).toBe(array[i]);
  })

  it('it should return en empty array if receives an empty array', function() {
    var hooray = new Hooray();
    var result = hooray.splice(2);
    var expected = [];
    var array = [];

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(expected.length);
    expect(result.length).toBe(0);
    for (var i = 0; i < expected.length; i++)
      expect(hooray[i]).toBe(array[i]);
  })
});
