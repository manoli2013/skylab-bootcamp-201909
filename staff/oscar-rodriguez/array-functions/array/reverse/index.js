function reverse (array) {

    if (!(array instanceof Array)) throw TypeError (array + 'is not an array');
    
    var ini=0;
    var fin=array.length-1;
    var item;
    
        while (ini<fin) {
            item=array[fin];
            array[fin]=array[ini];
            array[ini]=item;

            ini++;
            fin--;
        }
}