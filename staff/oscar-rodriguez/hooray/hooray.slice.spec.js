describe ("Hooray.prototype.slice", function () {

    it ('should return a new hooray with the "sliced" items', function () {
        var hooray = new Hooray ('a','b',1,2,3,4,5,6);

        var result = hooray.slice ();
        expect(result).toEqual(hooray);

        result = hooray.slice(2);
        var test = new Hooray (1,2,3,4,5,6);
        expect(result).toEqual(test);

        result = hooray.slice(2,5);
        var test = new Hooray (1,2,3);
        expect(result).toEqual(test);
    })
})