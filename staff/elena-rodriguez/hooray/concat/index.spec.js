describe('Hooray.prototype.concat', function () {
    it('should concatenate the initial given with the new elements and create a new addElements', function () {
        var addElements = new Hooray(1, 2, 3);

        var initial = [4,5,6]

        var result = addElements.concat(initial);

        expect(result.length).toBe(6);
        expect(addElements.length).toBe(3);
        expect(result).not.toBe(addElements);
        expect(result).toBeInstanceOf(Hooray);

        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
        expect(result[3]).toBe(4);
        expect(result[4]).toBe(5);
        expect(result[5]).toBe(6);

        expect(addElements[0]).toBe(1);
        expect(addElements[1]).toBe(2);
        expect(addElements[2]).toBe(3);
    });

});