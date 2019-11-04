describe('every', function () {

    it('should print false if any element does not fulfill the condition', function () {
        var numbers = [2, 3, 4, 5];
        var minorOne = function (item) {  return item < 1; };
        expect(every(numbers, minorOne)).toBe(false);
    });

 });