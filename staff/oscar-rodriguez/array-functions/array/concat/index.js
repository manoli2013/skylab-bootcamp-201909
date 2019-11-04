function concat () {
    for (var i=0; i<arguments.length; i++) 
        if (!(arguments[i] instanceof Array)) throw TypeError (arguments[i]+" must be an array");

    var result=[];
    result.length=0;
    for (var i=0; i<arguments.length; i++) {
        for (var j=0; j<arguments[i].length; j++) {
            result[result.length]=arguments[i][j];
        }
    }
    return result;
}
