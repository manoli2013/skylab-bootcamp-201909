describe("indexOf()", function() {

    var arr = [1, 2, 3, 4, 3, 2, 1];
    var emptyArray = [];

    it("should return the index of the first match", function() {
        expect(indexOf(arr, 3)).toEqual(2);
    });

    it("should return the index of the first match(with strings)", function() {
        var arr = ['a', 'b', 'c'];
        expect(indexOf(arr, 'b')).toEqual(1);
    });

    it("should return the index of the first match, after the secon position", function() {
        expect(indexOf(arr, 2, 4)).toEqual(5);
    });


    it("should return -1 because there is no match", function() {
        expect(indexOf(arr, 22)).toEqual(-1);
    });

    it("should return -1 because there is no match, after second position", function() {
        var arr = [1, 2, 3, 4, 5];
        expect(indexOf(arr, 1, 2)).toEqual(-1);
    });

    it("result should be an integer", function() {
        var result = indexOf(arr, 1);
        var arr = [1, 2, 3, 4, 5];
        expect(result).toBeInstanceOf(Number);
    });

    it("initial array should not change", function() {
        var arr = [1, 2, 3, 4];
        var length = arr.length
        indexOf(arr, 1);

        expect(arr.length).toEqual(length);
    });


    /*  it("Should throw an error if arr is not instance of Function", function() {
         var a;
         expect(function() { indexOf(a, 1) }).toThrowError(TypeError, "a is not defined");
     }); */

});