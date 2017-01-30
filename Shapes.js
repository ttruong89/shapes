'use strict';

// Require to pull the other shapes in the directory.
var Square = require("./Square.js");
var Triangle = require("./Triangle.js");
var Pentagon = require("./Pentagon.js");

// Constructor function for the shapes.
function Shape(type) {
	
	if(!(this instanceof Shape)) {
		return new Shape(type);
	}

	this.type = type;
};

// Adding get_type method to the Shape.prototype.
Shape.prototype.get_type = function() {
		// Console.log the shape type.
		console.log("This shape is a " + this.type);
};

// Length calculation function to shape prototype for the three shapes.  
Shape.prototype.get_length = function () {
	// Set length at 0.
	var length = 0;
	// If statements to apply length calculations specifically for each shapes.
	if (this.type === 'Triangle') {
		length = this.side1 + this.side2 + this.side3;
	} else if (this.type === 'Square') {
		length = 4 * this.side;
	} else if (this.type === "Pentagon") {
		length = this.side1 + this.side2 + this.side3 + this.side4 + this.side5;
	}
	// Return the calculated value.
	return length;
};

// Setting the prototype of the shapes to the constructor function Shape.
// Square.
Square.prototype = new Shape();
Square.prototype.constructor = Square;
//Triangle.
Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;
// Pentagon.
Pentagon.prototype = new Shape();
Pentagon.prototype.constructor = Pentagon;

// Passing parameters for the shapes for calcuations.
var triShape = new Triangle(1, 2, 3);
var squShape = new Square(4);
var penShape = new Pentagon(1, 2, 3, 4, 5);
var shape = new Shape("Constructor Shape");

// Console log out shape types, length calculations, and instanceof.
console.log("--------------------------------------");

	triShape.get_type();
	// Length console for Triangle.
	console.log("The " + triShape.type + " has a total length of " + triShape.get_length());
	// Check to see if triangle is an instance of triangle and shape.
	console.log("Triangle instance of Triangle?");
	console.log(triShape instanceof Triangle);
	console.log("Triangle instance of Shape?");
	console.log(triShape instanceof Shape);

console.log("--------------------------------------");

	squShape.get_type();
	// Length console for Square.
	console.log("The " + squShape.type + " has a total length of " + squShape.get_length());
	// Check to see if square is an instance of square and shape.
	console.log("Square instance of Square?");
	console.log(squShape instanceof Square);
	console.log("Square instance of Shape?");
	console.log(squShape instanceof Shape);

console.log("--------------------------------------");

	penShape.get_type();
	// Length console for Pentagon.
	console.log("The " + penShape.type + " has a total length of " + penShape.get_length());
	// Check to see if pentagon is an instance of pentagon and shape.
	console.log("Pentagon instance of Pentagon?");
	console.log(penShape instanceof Pentagon);
	console.log("Pentagon instance of Shape?");
	console.log(penShape instanceof Shape);

console.log("--------------------------------------");

	// Check to see if shape is an instance of shape.
	shape.get_type();
	console.log("Shape instance of Shape?");
	console.log(shape instanceof Shape);

console.log("--------------------------------------");





