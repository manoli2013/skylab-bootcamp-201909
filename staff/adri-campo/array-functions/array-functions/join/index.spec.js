describe ("join", function(){

    it ("Should join all the array items with and item that you define at the beginning", function(){
        var arrayNumbers = [1,2,3,4,5];
        var item = "---"
        var result = join(arrayNumbers, item);
        var finalArray = "1---2---3---4---5"


        expect(result).toBe(finalArray);
    });

    it ("Should join all the array items with a ',' when you don't put any value", function(){
        var arrayNumbers = [1,2,3,4,5];
        var result = join(arrayNumbers);
        var finalArray = "1,2,3,4,5";

        expect(result).toBe(finalArray);

    });

    it ("Should return an space if the array introduced is empty", function(){
        var arrayNumbers = [];
        var result = join(arrayNumbers);
        var finalArray = "";

        expect(result).toBe(finalArray);


    });
    

    it ("Should return an space if the item introduced is a number instead of an array", function(){
        var arrayNumbers = 4;
        var result = join(arrayNumbers);
        var finalArray = "";

        expect(result).toBe(finalArray);


    });



    // ERRORS











})