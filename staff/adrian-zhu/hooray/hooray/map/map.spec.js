describe('Hooray.prototype.map', function () {
  
    it('should succeed on correct hooray and expression, adding all hooray', function () {
        
        
      var hooray = new Hooray (1, 2, 3);
      var result = 0;

      hooray.map(function (number) { result += number; });

      expect(result).toBe(6);
  });

    it('should succeed on correct hooray and expression, concatenating all hooray', function () {

        
      var hooray = new Hooray(1, 2, 3);
      var result = '';

      hooray.map(function (number) { result += number; });
      expect(result).toBe('123');
    });


    it('should succeed on correct hooray and expression, multiplying all numbers by 10', function () {
    var hooray = new Hooray (1, 2, 3, 4);
    var result = hooray.map(function(number) {return number * 10 });


    var expected = [10, 20, 30, 40];
    expect(result).toEqual(expected);

    });

  it('should fail on undefined expression', function () {
      var hooray = new Hooray (1, 2, 3);
      var expression; 

      expect(function() { hooray.map(expression); }).toThrowError(TypeError, 'undefined is not a function');
  });

  it('should fail on non-function expression', function () {
      var hooray = new Hooray (1, 2, 3);

      expect(function () { hooray.map(undefined); }).toThrowError(TypeError, 'undefined is not a function');
      expect(function() { hooray.map(true); }).toThrowError('true is not a function');
      expect(function() { hooray.map(1); }).toThrowError('1 is not a function');
  });

});