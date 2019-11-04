describe('Hooray.prototype.concat', function () {
    it('should concatenate the array passed with hooray elements and create a new hooray', function () {
        var hooray = new Hooray(1, 2, 3);

        var array = [4,5,6]

        var result = hooray.concat(array);

        expect(result.length).toBe(6);
        expect(hooray.length).toBe(3);
        expect(result).not.toBe(hooray);
        expect(result).toBeInstanceOf(Hooray);

        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
        expect(result[3]).toBe(4);
        expect(result[4]).toBe(5);
        expect(result[5]).toBe(6);

        expect(hooray[0]).toBe(1);
        expect(hooray[1]).toBe(2);
        expect(hooray[2]).toBe(3);
    });

    it('should concatenate the elements passed with hooray elements and create a new hooray', function () {
        var hooray = new Hooray(1, 2, 3);

        var array = [4,5,6]

        var result = hooray.concat(array,7,8,9);

        expect(result.length).toBe(9);
        expect(hooray.length).toBe(3);
        expect(result).not.toBe(hooray);
        expect(result).toBeInstanceOf(Hooray);

        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
        expect(result[3]).toBe(4);
        expect(result[4]).toBe(5);
        expect(result[5]).toBe(6);
        expect(result[6]).toBe(7);
        expect(result[7]).toBe(8);
        expect(result[8]).toBe(9);

        expect(hooray[0]).toBe(1);
        expect(hooray[1]).toBe(2);
        expect(hooray[2]).toBe(3);
    });

});