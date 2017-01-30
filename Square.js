'use strict'

// Square constructor function.
function Square (side) { 
	if (!(this instanceof Square)) {
		return new Square (side);	
	}
	this.type = "Square";
	this.side = side;
};

// Export Square constructor function.
module.exports = Square;