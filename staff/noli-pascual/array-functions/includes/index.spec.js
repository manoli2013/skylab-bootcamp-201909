describe('includes', function () {
    it('should check if item is in array and return true, with initial index indicated', function () {
        var array = [1,2,3,4,5];
        var value = 5;
        var index = 2;

        var result = includes(array, value, index);

        expect(result).toBe(true);

               
    });

    it('should check if item is in array and return true with no index indicated)', function () {
        var array = [1,2,3,4,5];
        var value = 5;
        var result = includes(array,value);

        expect(result).toBe(true);
       
    });

    it('should return false if value is not included in array', function () {
        var array = [1,2,3,4,5];

        var result = includes(array,'a');
        expect(result).toBe(false);

    });

    it('should find item with negative index indicated', function () {
        var array = ["Pol", "jordi", "Noa", "Noli", "Eli", "Mari"];
        var value = "Eli";
        var result = includes(array,value,-4);

        expect(result).toBe(true);
    });

});

