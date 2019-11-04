
/**
 * Fill the hooray to iterate with the items that you sent.
 * 
 * @param {*} hooray The initial hooray.
 * @param {*} newItem Character we will use to replace items from hooray.
 * 
 */

Hooray.prototype.fill = function(newItem){

	var a = 0;
	var b = this.length;
	
	switch(arguments.length){
	  case 2:
		a = arguments[1];
		break;
	  case 3:
		a = arguments[1];
		b = arguments[2];
		break;
	  default:
		  if (arguments.length < 1 ) newItem = undefined;
		break;
	}

	for(var i = a; i < b; i++){
		this[i] = newItem;
	  }  	  
  };
