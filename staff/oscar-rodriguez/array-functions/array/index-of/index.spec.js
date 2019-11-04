describe ('indexOf', function () {


    it ('should return the first index where the item is found', function () {

        var array = [1,2,3,4,5,6,7,8,9,0];

        expect(indexOf(array,5)).toBe(4);
    })

    it ("should start searching from the end when a negative starting is sent", function () {

        var array = [1,2,3,4,5,6,7,8,9,0];

        expect(indexOf(array,3,-5)).toBe(-1);
    })

    it ("should return -1 when Item's not found", function () {

        var array = [1,2,3,4,5,6,7,8,9,0];

        expect(indexOf(array,10)).toBe(-1);
    })

    it ('should return the first index where the item is found when a starting is specified', function () {

        var array = [1,2,3,4,5,6,7,8,9,0];

        expect(indexOf(array,5,3)).toBe(4);
    })

    it ("should return -1 when Item's not found when a starting is specified", function () {

        var array = [1,2,3,4,5,6,7,8,9,0];
        
        expect(indexOf(array,3,5)).toBe(-1);
    })

    it ("should return -1 when am empty array calls indexOf() or any item is scepecified", function () {

        var array = [];
        expect(indexOf(array,5)).toBe(-1);

        array = [1,2,3];
        expect(indexOf(array,5)).toBe(-1);
    })

    it ("should start searching at index 0 when a invalid starting is sent", function () {

        var array = [1,2,3,4,5,6,7,8,9,0];
        expect(indexOf(array,3,"5")).toBe(2);
    })

    it ("shouldn't modify the original array", function () {

        var array = [1,2,3,4];
        var test = [1,2,3,4];


        var restult = indexOf(array,3);

        expect(array).toEqual(test);
    })
})
