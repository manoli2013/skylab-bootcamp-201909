describe('Hooray.prototype.concat', function(){
    it('Should succeed the operation, merging all arrays selected into one new hooray', function(){
        var list1, list2, list3, result, expected;

        list1 = new Hooray (1, 2, 3, 4);
        list2 = new Hooray (5, 6, 7, 8);
        list3 = new Hooray (9, 10, 11, 12, 13 ,14);

        expected = new Hooray (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);
        result = list1.concat(list2, list3);
        //console.log(result);
        
        expect(result).toEqual(expected);

    });
    
    it('Should return all the elements without any item introduced', function(){
        var list, result;

        list = new Hooray(1, 2, 3); 
        result = list.concat(); //if list = (1, 2, 3) concat is not a function

        expect(result).toContain(1, 2, 3);
    });

    it('Should return sucess in case of concatenating nested arrays', function(){   
        var list1, list2, result, expected;

        list1 = new Hooray ([1]);
        list2 = new Hooray (2, [3])
        
        result= list1.concat(list2);
        console.log(result);

        expected= new Hooray ([1], 2, [3]);
        console.log(expected);

        expect(result).toEqual(expected);

    });
});
