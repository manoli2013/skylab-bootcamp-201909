describe ("every", function () {
    
    it("Should return true if all the array items pass the condition given", function () {
        var arrayNumbers = [1,2,3,4,5];

        function check (item){
            return item < 6 
        }

        var result = every(arrayNumbers, check);


        expect(result).toBe(true);

    });

    it("Should return false if some of the items do not pass the condition given", function() {

        var arrayNumbers = [1,2,3,4,5];

        function check (item){
            return item < 3
        }

        var result = every(arrayNumbers, check);


        expect(result).toBe(false);

    });


    it("Should return true if you define an empty array", function () {
        var arrayNumbers = [];
        function check (item){
            return item < 3
        }

        var result = every(arrayNumbers, check);


        expect(result).toBe(true);

    });


    it("Should return true if you give a number instead of an array. Wihtout checking the condition", function () {
        var arrayNumbers = 5;
        function check (item){
            return item < 3
        }

        var result = every(arrayNumbers, check);


        expect(result).toBe(true);

    });
    

    it("Should check also negative numbers and apply the thruly condition for all the items", function () {
        var arrayNumbers = [-6,-5,-4];
        function check (item){
            return item < -3
        }

        var result = every(arrayNumbers, check);


        expect(result).toBe(true);

    });



});