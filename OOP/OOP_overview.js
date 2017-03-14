//We pair JavaScript Objects and Functions to create Constructors that will act as our blueprints.
//Creation of objects:
//Classical VS Protoypal:

// Inheritance: One object gets access to the properties and methods of another object.

//classical Inheritance: very verbose.

//Protoypal Inheritance : very flexibel, extensible.
// onject in memory: properties and methods. can access it with object.property.
// all objects including functions...have a prototype propert {}. the property is simply a refernece to an object.

// How does everything has a prototype?

var a = {}; // the base object {} its the very bottom of the prototyp chain, and each object has a method.
var b = functions(){ }; // any function you create will automotacillay have a prototyp, which have methods (apply, bind, call)
var c = []; //
