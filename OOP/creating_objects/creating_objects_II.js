// Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers.
/*
1- Have the Vehicle constructor also take in a “speed” Store the speed as an attribute
2- Create a private variable called distance_travelled that starts at 0
3- Create a private method called updateDistanceTravelled that increments distance traveled by speed
4- Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
5 - Add a method called checkMiles that console.logs the distance_travelled
*/
function VehicleConstructor(name, num_wheels, num_passengers, speed){
    var self = this;
    //PRIVATE VARIABLE
    var distance_travelled = 0;

    //PRIVATE METHODS
    function updateDistanceTravelled(){
        distance_travelled += self.speed;
    }
    /*
      Properties
    */
    this.speed = speed || 0;
    this.name = name;
    this.num_wheels = num_wheels;
    this.num_passengers = num_passengers || 0;

    /*
      methods
    */
    this.makeNoise = function(){
        console.log("MAKE SOME NOISE!");
    }
    this.move = function(){
        updateDistanceTravelled();
        this.makeNoise();
    }
    this.checkMiles = function(){
        return distance_travelled;
    }
}

var bus = new VehicleConstructor('Bus', 8, 35, 60);
// console.log(bus.distance_travelled); //undefined--> bus has no distance_travelled property
console.log(bus.checkMiles());

bus.move();
console.log(bus.checkMiles());

//This is the creations of a Bike.
var Bike = new VehicleConstructor("Bike", 2, 1);// instanciate a new object from the VehicleConstructor class
//Redefine the Bike’s makeNoise method to print “ring ring!”
Bike.makeNoise = function(){
    // console.log("ring ring");
}
Bike.makeNoise();
// console.log(Bike);
// Bike.makeNoise(); //---> MAKE SOME NOISE!

//This is the creaition of a Sedan
var Sedan = new VehicleConstructor("Sedan", 4, 4);// instanciate a new object from the VehicleConstructor class
//Redefine the Sedan's makeNoise method to print
Sedan.makeNoise = function(){
    // console.log("honk honk");
}
Sedan.makeNoise();

//Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​
var Bus = new VehicleConstructor("Bus", 8, 1);// instanciate a new object from the VehicleConstructor class
Bus.pickUpPassengers = function(passengers){
    this.num_passengers += passengers;
}
console.log(Bus.num_passengers);
Bus.pickUpPassengers(14);
console.log(Bus.num_passengers);
