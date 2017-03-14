/*
var = Amer {
    name : "Amer",
    yearOfBirth : 1988,
    job: "Student"
};
*/
// This is an object literals

/*
I can use a blueprint to create multiple objects.
I can create a function constructor- a pattern to write a bluprint.
The usual convention, the function constructor is with capital letter.
*/

/*
Every JavaScript object has a prototype property, which makes inheritance possible in JavaScript.
The prototype property of an object is where we put methods and properties that we want other objects to inherit.
The constructor's prototype property is NOT the prototype of the Constructor itself, it's the prototype of ALL instances that are created through it.

The prototype chain - when a certain method (or prototype) is called, the search starts in the object itself, and if it cannot be found,
the search moves on to the object's prototype. This continues until the method is found.


Every JavaScript object has a prototype. The prototype is also an object.

All JavaScript objects inherit their properties and methods from their prototype.
*/

//function constructor
var Person = function (name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log("I am " + (2017 - this.yearOfBirth) + " years old.");
};//the method is not in the constructor but I still can use this cuz it's in the prototype property of the function constructor.
//this is Inheritance in practice.

Person.prototype.last_name = 'Gheith'


//lets create an object
var Amer = new Person ('Amer', 1988, 'Student')// instansiation- cuz this object is an instance of the person object
var Hamza = new Person ('Hamza', 1994, '@ Amazon')
var Ahmad = new Person ('Ahmad', 1984, '@Chicos')
Hamza.calculateAge();
Ahmad.calculateAge();
Amer.calculateAge();

console.log(Amer.name);


// new - operator*- a brand new empty object is created
// the constructor function "Person" is called with the arguments we specified.
// calling a function creates a new execution context that has "Amer variable"
