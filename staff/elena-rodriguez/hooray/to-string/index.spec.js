describe ("Hooray.prototype.toString", function () {

    it ("should convert a hooray to a string", function () {

        var hooray = new Hooray (2,"a",43,1);
        var test = "2,a,43,1";

        var result = hooray.toString();

        expect(result).toEqual(test);
    })

    it ("shouldn't modify the original hooray", function () {

        var hooray = new Hooray (1,2,3,4);
        var test = new Hooray (1,2,3,4);

        hooray.toString;

        expect(hooray).toEqual(test);
        expect(hooray.length).toEqual(test.length);
    })


})