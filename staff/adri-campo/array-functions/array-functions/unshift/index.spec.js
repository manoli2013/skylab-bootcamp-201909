describe('unshift', function(){
    it('should add an element in the beginning of the array', function(){
        var ar1 = [4, 5, 6];
        unshift(ar1, 3);
        expect(ar1.length).toBe(4);
    });

    it('should add two or more elements in the beginning of the array', function(){
        var ar1 = [4, 5, 6];
        unshift(ar1, 3, 4);
        expect(ar1.length).toBe(5);
    });

    it('should add two or more elements to an empty array', function(){
        var ar1 = [];
        unshift(ar1, 3, 4);
        expect(ar1.length).toBe(2);
    });

    it('should not add elements if have not elements', function(){
        var ar1 = [4, 5, 6];
        unshift(ar1);
        expect(ar1.length).toBe(3);
    });
});