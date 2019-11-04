describe('unshift', function(){
    var array = [];
    beforeEach(function() {
        array = [4, 5, 6];
    });

    it('should insert an element in the beginning of the array', function(){
        unshift(array, 3);
        expect(array.length).toBe(4);
    });

    it('should insert two or more elements in the beginning of the array', function(){
        unshift(array, 3, 4);
        expect(array.length).toBe(5);
    });

    it('should insert two or more elements to an empty array', function(){
        var array = [];
        unshift(array, 3, 4);
        expect(array.length).toBe(2);
    });

    it('should not insert elements if not elements', function(){
        unshift(array);
        expect(array.length).toBe(3);
    });
});