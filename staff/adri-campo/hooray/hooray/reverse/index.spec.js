describe ('Hooray.prototype.reverse', function () {

    it ('should return a new hooray with the same items, but on oposite order.', function () {

        var hooray = new Hooray (2,4,6,8);
        var test = new Hooray (2,4,6,8)
        hooray.reverse();
        var end = test.length-1;
        for (var i=0; i<hooray.length; i++) {
            expect(hooray[i]).toBe(test[end]);
            end--;
        }
        expect(test.length).toBe(hooray.length);
    })

})