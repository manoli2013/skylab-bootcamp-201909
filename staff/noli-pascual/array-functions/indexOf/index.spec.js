describe('indexOf', function() {
    

    it("Should return index of the first match", function() {
        var arr = [5, 10, 5, 3];

        var searchElement = 5;
        
        var expected = 0;

        expect(indexOf(arr, searchElement)).toBe(expected);

    });


    it("Should return -1 if does not find item", function() {
        var arr = [5, 10, 5, 3];

        var searchElement = 8;
        
        var expected = -1;

        expect(indexOf(arr, searchElement)).toBe(expected);

    });

    it("Should return index of the first match searching from the index indicated", function() {
        var arr = [5, 10, 5, 3];

        var searchElement = 5;
        
        var expected = 2;

        expect(indexOf(arr, searchElement, 1)).toBe(expected);

    });

    it("Should return index of the first match searching from 0 index, while index indicated is negative value.", function() {
        var arr = [5, 10, 5, 3];

        var searchElement = 5;
        
        var expected = 0;

        expect(indexOf(arr, searchElement, -3)).toBe(expected);

    });

})