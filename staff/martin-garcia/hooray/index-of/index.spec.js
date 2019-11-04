describe("Hooray.prototype.indexOf()", function() {

    var hooray = new Hooray(1, 2, 3, 4, 3, 2, 1);

    it("should return the index of the first match", function() {
        expect(hooray.indexOf(3)).toEqual(2);
    })

    it("should return the index of the first match(with strings)", function() {
        var hooray = new Hooray('a', 'b', 'c');
        expect(hooray.indexOf('b')).toEqual(1);
    })

    it("should return the index of the first match, after the secon position", function() {
        expect(hooray.indexOf(2, 4)).toEqual(5)
    })


    it("should return -1 because there is no match", function() {
        expect(hooray.indexOf(22)).toEqual(-1);
    })

    it("should return -1 because there is no match, after second position", function() {
        var hooray = new Hooray(1, 2, 3, 4, 5);
        expect(hooray.indexOf(1, 2)).toEqual(-1)
    })

    it("result should be an integer", function() {
        var result = hooray.indexOf(1);
        var arr = [1, 2, 3, 4, 5];
        expect(result).toBeInstanceOf(Number);
    })

    it("initial array should not change", function() {
        var hooray = new Hooray(1, 2, 3, 4);
        var length = hooray.length
        hooray.indexOf(1);
        var expectedHorray = new Hooray(1, 2, 3, 4);

        expect(hooray).toEqual(expectedHorray);
    })

    it("Should throw an error if hooray is not instance of Function", function() {
        var fn = "pepito";
        var arr = "pepito";
        expect(hooray).toBeInstanceOf(Hooray);
    });

});