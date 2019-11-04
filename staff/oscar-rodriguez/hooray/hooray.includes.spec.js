describe ('Hooray.prototype.includes', function () {


    it ('should return true when an item is included on a hooray', function () {

        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);

        expect(hooray.includes(3)).toBe(true);
    })

    it ("should return false when the item is not included", function () {

        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);

        expect(hooray.includes(20)).toBe(false);
    })

    it ('should return true when an item is included on a hooray, when a starting is specified', function () {

        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);

        expect(hooray.includes(7,3)).toBe(true);
    })

    it ('should return false when an item is Not included on a hooray, when a starting is specified', function () {

        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);

        expect(hooray.includes(3,5)).toBe(true);
    })

    it ("should return false when am empty hooray calls includes()", function () {

        var hooray = new Hooray ();

        expect(hooray.includes(20)).toBe(false);
    })

    it ("should return false when any item is sent as parameter", function () {

        var hooray = new Hooray (1,2,3,4);

        expect(hooray.includes()).toBe(false);
    })

    it ("shouldn't modify the original hooray", function () {

        var hooray = new Hooray (1,2,3,4);
        var test = new Hooray (1,2,3,4);

        var expression = function (i) { return (i<0)};

        var restult = hooray.includes(expression);

        expect(hooray).toEqual(test);
    })

    it ('should start searching at index 0 when a NaN or negative starting specified.', function () {

        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);

        expect(hooray.includes(7,"a")).toBe(true);
        expect(hooray.includes(7,-2)).toBe(true);
    })

})

