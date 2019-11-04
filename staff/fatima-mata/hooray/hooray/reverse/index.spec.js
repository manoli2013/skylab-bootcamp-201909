describe ('Hooray.prototype.reverse', function () {

    it ('should return a new hooray with the same items, but on oposite order.', function () {

        var a = new Hooray (2,4,6,8);
        var b = new Hooray (2,4,6,8)

        a.reverse();

        var c = b.length-1;

        for (var i=0; i<a.length; i++) {
            expect(a[i]).toBe(b[c]);
            c--;
        };
        expect(b.length).toBe(a.length);
    });
});