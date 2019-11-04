
/**
 * FILL.
 * Fill the hooray to iterate with the items that you sent.
 * 
 * @param {Hooray} hooray The initial hooray.
 * @param {*} newItem Character we will use to replace items from hooray.
 * 
 */

Hooray.prototype.fill = function(newItem){
	var start = 0;
	var end = this.length;
	
	switch(arguments.length){
	  case 2:
		start = arguments[1];
		break;
	  case 3:
		start = arguments[1];
		end = arguments[2];
		break;
	  default:
		  if (arguments.length < 1 ) newItem = undefined;
		break;
	}

	for(var i = start; i < end; i++){
		this[i] = newItem;
	  }  	  
  };
