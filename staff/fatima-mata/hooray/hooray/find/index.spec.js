describe ('Hooray.prototype.find', function () {

   it ('should return the index of the first item that acomplish the expression sent', function () {

       var a = new Hooray (1,2,3,4,5,6,7,8,9,0);
       var expression = function (i) { return (i > 0)};

       expect(a.find(expression)).toBe(1);
   });

   it ('should return undefined when item is not found', function () {

       var a = new Hooray (1,2,3,4,5,6,7,8,9,0);
       var expression = function (i) { return (i<0)};

       expect(a.find(expression)).toBe(undefined);
   });

   it ('should return undefined when am empty hooray calls find', function () {

       var a = new Hooray ();
       var expression = function (i) { return (i<0)};

       expect(a.find(expression)).toBe(undefined);
   });

   it ('should not modify the original hooray', function () {

       var a = new Hooray (1,2,3,4);
       var b = new Hooray (1,2,3,4);

       var expression = function (i) { return (i<0)};

       var c = a.find(expression);

       expect(a).toEqual(b);
   });

   it('should throw a TypeError when parameter is not a function', function () {

       var a = new Hooray (2,4,6);

       expect (function () { a.find(2)}).toThrowError(TypeError,'2 is not a function');
       expect (function () { a.find('a')}).toThrowError(TypeError,'a is not a function');
       expect (function () { a.find()}).toThrowError(TypeError,'undefined is not a function');
   });
});
