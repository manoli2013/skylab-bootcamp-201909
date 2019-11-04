describe ('index-of', function () {

    it ('should return the first index where the item is found', function () {

        var a = [1,2,3,4,5,6];

        expect(indexOf(a, 5)).toBe(4);
    });

    it ('should return -1 when item is not found', function () {

        var a = [1,2,3,4,5,6];

        expect(indexOf(a, 20)).toBe(-1);
    });

    it ('should return the first index where the item is found when a starting is specified', function () {

        var a = [1,2,3,4,5,6];

        expect(indexOf(a, 5,3)).toBe(4);
    });

    it ('should return -1 when am empty a calls index or any item is scepecified', function () {

        var a = [];
        expect(indexOf(a, 5)).toBe(-1);

        var a = [1,2,3,4];
        expect(indexOf(a, 5)).toBe(-1);
    });

    it ('should start searching at index 0 when a invalid starting is sent', function () {

        var a = [1,2,3,4,5,6];
        expect(indexOf(a, 3,'5')).toBe(2);
    });

    it ('should not modify the original array', function () {

        var a = [1,2,3,4,5,6];
        var b = [1,2,3,4,5,6];

        var result = indexOf(a, 3);

        expect(a).toEqual(b);
    });
});