/**
 * Returns de value of the fisrt element in the array that satisfies the condition.
 * @param {array} Array The array to be inspected.
 * @param {condition} expression that specifies what condition should be provided.
 */


function find(array , expression){
    if(!arguments.length) throw TypeError('no declared arguments');
    if(!(array instanceof Array))  throw TypeError (array + ' is not an array');
    if(!(expression instanceof Function)) throw TypeError(expression + ' is not a function');

    for(var i = 0 ; i<array.length ; i++){

        if(expression(array[i])){

            return array[i];
    };
}
}