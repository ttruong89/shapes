'use strict'

// Triangle constructor function.
function Triangle (side1, side2, side3) { 
	if (!(this instanceof Triangle)) {
		return new Triangle (side1, side2, side3);	
	}
	this.type = "Triangle";
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.length = this.side1 + this.side2 + this.side3;
};

// Export Triangle function.
module.exports = Triangle;