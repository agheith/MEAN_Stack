// Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers.

/*
-Each vehicle should have a makeNoise method
*/
function VehicleConstructor(name, num_wheels, num_passengers){
    var vehicle = {};
    /*
      Properties
    */
    vehicle.name = name;
    vehicle.num_wheels = num_wheels;
    vehicle.num_passengers = num_passengers;

    /*
      methods
    */
    vehicle.makeNoise = function(){
        console.log("MAKE SOME NOISE!");
    }

    return vehicle;
}

//This is the creations of a Bike.
var Bike = VehicleConstructor("Bike", 2, 1);
//Redefine the Bike’s makeNoise method to print “ring ring!”
Bike.makeNoise = function(){
    // console.log("ring ring");
}
Bike.makeNoise();
// console.log(Bike);
// Bike.makeNoise(); //---> MAKE SOME NOISE!

//This is the creaition of a Sedan
var Sedan = VehicleConstructor("Sedan", 4, 4);
//Redefine the Sedan's makeNoise method to print
Sedan.makeNoise = function(){
    // console.log("honk honk");
}
Sedan.makeNoise();

//Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​
var Bus = VehicleConstructor("Bus", 8, 1);
Bus.pickUpPassengers = function(passengers){
    Bus.num_passengers += passengers;
}
console.log(Bus.num_passengers);
Bus.pickUpPassengers(14);
console.log(Bus.num_passengers);
