describe ("toString", function () {

    it ("should convert a array to a string", function () {

        var array = [2,"a",43,1];
        var test = "2,a,43,1";

        var result = toString(array);

        expect(result).toEqual(test);
    })

    it ("shouldn't modify the original array", function () {

        var array = [1,2,3,4];
        var test = [1,2,3,4];

        toString(array);

        expect(array).toEqual(test);
        expect(array.length).toEqual(test.length);
    })


})