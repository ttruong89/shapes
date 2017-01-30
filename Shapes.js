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
		console.log("This shape is " + this.type + ".");
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

// Passing parameters for the shapes.
var triShape = new Triangle(2, 2, 3);
var squShape = new Square(1);
var penShape = new Pentagon(3, 2, 3, 3, 3);
var shape = new Shape("original constructor shape");

// Determine type and size of constructor.
// Console out total lengths of shapes.
console.log("The " + triShape.type + " has a total length of " + triShape.length);
console.log("The " + squShape.type + " has a total length of " + squShape.length);
console.log("The " + penShape.type + " has a total length of " + penShape.length);
console.log("The shape is the " + shape.type);

// Check if the three shapes are instances of Shape.
if (triShape instanceof Triangle) {
	console.log("A Triangle is a Triangle.");
}
if (squShape instanceof Square) {
	console.log("A Triangle is a Square.");
}
if (penShape instanceof Pentagon) {
	console.log("A Triangle is a Pentagon.");
}
if (shape instanceof Shape) {
	console.log("This is the constructor shape.");
}





