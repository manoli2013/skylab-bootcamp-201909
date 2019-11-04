describe('includes', function() {
  it('should find the item searched', function() {
    var hooray = new Hooray(6, 7, 8, 9, 10);

    expect(hooray.includes(8)).toBe(true);
    expect(hooray.length).toBe(5);
    expect(hooray[hooray.length - 1]).toBe(10);
  });

  it('should fail finding the item in the array', function() {
    var hooray = new Hooray(3, 7, 8, 9, 10);

    expect(hooray.includes(false)).toBe(false);
    expect(hooray.includes(1)).toBe(false);
    expect(hooray.length).toBe(5);
    expect(hooray[hooray.length - 1]).toBe(10);
  });

  it('should not modify the original array', function() {
    var hooray = new Hooray(6, 7, 8, 9, 10);
    var array = [6, 7, 8, 9, 10];
    var expected = [6, 7, 8, 9, 10];
    hooray.includes(6);

    expect(array.length).toBe(expected.length);
    expect(array).toEqual(expected);
  });

  it('should return a boolean', function() {
    var hooray = new Hooray(6, 7, 8, 9, 10);
    var result = hooray.includes(7);

    expect(result).toBe(true);

    var result2 = hooray.includes(2);
    expect(result2).toBe(false);
  });

  it('should return undefined on empty array received', function() {
    var hooray = new Hooray();
    var result = hooray.includes(3);

    expect(result).toBe(false);
  });

  it('should receive any data type as item', function() {
    var hooray = new Hooray(6, 7, 8, 9, 10);
    var fn = function(x) { return x > 5; };

    expect(hooray.includes(true)).toBe(false);
    expect(hooray.includes(fn)).toBe(false);
    expect(hooray.includes([1, 2])).toBe(false);
    expect(hooray.includes({ 1: 'hello' })).toBe(false);
    expect(hooray.includes(7)).toBe(true);
  });
});