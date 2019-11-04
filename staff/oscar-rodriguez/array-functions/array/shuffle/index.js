function shuffle (array) {

    if (!(array instanceof Array)) throw TypeError (array + ' is not an array');
    if (array.length === 0) throw Error ("Can't randomize an empty array"); 
	var randomized = [];
	var indexs_list = [];

	for (i=0; i<array.length; i++) {
		indexs_list.push(i);
    }

	for (i=0; i<array.length; i++) {
		var random = Math.floor(Math.random()*indexs_list.length);
		randomized.push (array[indexs_list[random]]);

		indexs_list.splice(random,1);
    }

	return randomized;
}