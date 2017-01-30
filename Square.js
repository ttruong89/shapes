'use strict'

// Square constructor function.
function Square (side) { 
	if (!(this instanceof Square)) {
		return new Square (side);	
	}
	this.type = "Square";
	this.side = side;
	this.length = 4 * this.side;
};

// Export Square function.
module.exports = Square;