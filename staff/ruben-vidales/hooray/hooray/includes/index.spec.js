describe('includes hooray', function () {
    it('should return true if the value is found in the array', function () {
        var hor = new Hooray(9, 3, 12, 5, 8, 130, 44);
        var value = 12;
        var result = hor.includes(value);

        expect(result).toBeTruthy();
    });

    it('should return false if the value is not found in the array', function () {
        var hor = new Hooray(9, 3, 12, 5, 8, 130, 44);
        var value = 15;
        var result = hor.includes(value);

        expect(result).toBeFalsy();
    });

    it('should return false if the array is empty', function () {
        var hor = new Hooray();
        var value = 15;
        var result = hor.includes(value);

        expect(result).toBeFalsy();
    });

    it('should return false if the value is undefined', function () {
        var hor = new Hooray(9, 3, 12, 5, 8, 130, 44);
        var value //= 15;
        var result = hor.includes(value);

        expect(result).toBeFalsy();
    });
});