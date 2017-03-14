/*
Have the Vehicle constructor also take in a “speed”Store the speed as an attribute
Create a private variable called distance_travelled that starts at 0
Create a private method called updateDistanceTravelled that increments distance traveled by speed
Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
Add a method called checkMiles that console.logs the distance_travelled
Now modify your code to use Prototype and the recommended way of OOP we showed in the previous chapter.
Have each vehicle generate a random VIN number (study Math.random & Math.floor). Don’t worry about potential duplicates for now.
*/


function VehicleConstructor (name, wheels, num_passengers, speed){
    if(!(this instanceof VehicleConstructor)){
        return new VehicleConstructor(name, wheels, num_passengers, speed);
    }

    var chars = "01233456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    /*PUBLIC*/
    this.distance_travelled = 0;
    this.speed = speed;
    this.name = name;
    this.wheels = wheels;
    this.num_passengers = num_passengers;
    this.vin = createVin();

    function createVin(){
        var vin = '';                  // each time it loops its gona pick a randome character and concatenate it
        for (var i = 0; i < 17; i+=1){ // i can add each time,
            vin += chars[Math.floor(Math.random()*35)];
        }
        return vin;
    }
}

VehicleConstructor.prototype.makeNoise = function(noise){
    var noise = noise || "Honks Honk!!"
    console.log(noise);
    return this;
};

VehicleConstructor.prototype.move = function(){
    this.makeNoise();
    this.updateDistanceTravelled();
    return this;
};

VehicleConstructor.prototype.checkMiles = function(){
    console.log(this.distance_travelled);
    return this;
};

VehicleConstructor.prototype.updateDistanceTravelled = function(){
    this.distance_travelled += this.speed;
    console.log(this.distance_travelled);
};

var car = new VehicleConstructor('car', 4, 4, 65);
