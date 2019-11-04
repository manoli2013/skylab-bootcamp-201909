describe ('Hooray.prototype.indexOf', function () {

    it ('should return the first index where the item is found', function () {

        var a = new Hooray (1,2,3,4,5,6,7,8,9,0);

        expect(a.indexOf(5)).toBe(4);
    });

    it ('should start searching from the end when a negative starting is sent', function () {

        var a = new Hooray (1,2,3,4,5,6,7,8,9,0);

        expect(a.indexOf(3,-5)).toBe(-1);
    });

    it ('should return -1 when item is not found', function () {

        var a = new Hooray (1,2,3,4,5,6,7,8,9,0);

        expect(a.indexOf(10)).toBe(-1);
    });
    it ('should return the first index where the item is found when a starting is specified', function () {

        var a = new Hooray (1,2,3,4,5,6,7,8,9,0);

        expect(a.indexOf(5,3)).toBe(4);
    });

    it ('should return -1 when item is not found when a starting is specified', function () {

        var a = new Hooray (1,2,3,4,5,6,7,8,9,0);
        
        expect(a.indexOf(3,5)).toBe(-1);
    });

    it ('should return -1 when am empty hooray calls indexOf() or any item is scepecified', function () {

        var a = new Hooray ();
        expect(a.indexOf(5)).toBe(-1);

        a = new Hooray(1,2,3);
        expect(a.indexOf(5)).toBe(-1);
    });

    it ('should start searching at index 0 when a invalid starting is sent', function () {

        var a = new Hooray (1,2,3,4,5,6,7,8,9,0);
        expect(a.indexOf(3,'5')).toBe(2);
    });

    it ('should not modify the original hooray', function () {

        var a = new Hooray (1,2,3,4);
        var test = new Hooray (1,2,3,4);

        var restult = a.indexOf(3);

        expect(a).toEqual(test);
    });
});
