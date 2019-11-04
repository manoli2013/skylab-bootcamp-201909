describe ('reverse', function () {

    it ('should return a new array with the same items, but on oposite order.', function () {

        var array = [2,4,6,8];
        var test = [8,6,4,2];

        reverse(array);

        expect(array).toEqual(test);
        expect(test.length).toBe(array.length);
    })

})