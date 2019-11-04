describe('push()', function() {
    it('Should push an element, and return the value of new index', function() {
        var array = [1, 2, 3];
        var expectedArray = [1, 2, 3, 2];
        var expectedReturn = 4
        var elementToPush = 2;
        expect(push(array, elementToPush)).toEqual(expectedReturn);
        expect(array).toEqual(expectedArray);
    });

    it("Should  throw an error if expresion is not instance of Function", function() {
        var array = 'pepito';
        var element = '2';
        expect(function() { push(array, element) }).toThrowError(TypeError, array + ' is not an Array');
    });

});