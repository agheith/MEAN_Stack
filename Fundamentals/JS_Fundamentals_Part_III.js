//Create a function that takes in one parameter called “name” and returns an object that looks similar to the person object from JS Fundamentals Part II.

// Running this in your terminal as you create it can be super helpful since we aren’t manipulating the DOM!

// The returned object should have a name property that is set to the value of the name argument that was passed into the function.
// Each returned person object should also have the other properties from JS Fundamentals Part II:
// distance_traveled - set this initially as zero say_name - should alert the object’s name property say_something - have it accept a parameter. It should then say for example “Jay says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
// walk - have it alert for example “Jay is walking” and increase distance_traveled by 3 run - have it alert for example “Jay is running” and increase distance_traveled by 10 crawl - have it alert for example “Jay is crawling” and increase distance_traveled by 1

var person = {

    name : "Amer",
    distance_traveled: 0,
    say_name : function(){
        console.log(person.me);
    },

say_something : function(phrase){
  console.log(`${person.name} says: ${phrase}`);
    },

walk : function(){
  console.log(`${person.name} is walking!`);
  person.distance_traveled += 3;
  return person;
    },

run : function(){
  console.log(`${person.name} is running!`);
  person.distance_traveled += 10;
  return person;
    },

crawl : function(){
  console.log(`${person.name} is crawling!`);
  person.distance_traveled += 1;
  return person;
    },

chewGum:function(){
  console.log("I can walk and chew gum, but I can't chew gum and walk...");
    }

}


// =================================================


function ninjaConstructor(name, cohort){
  var ninja = {}
  var belts = ["yellow", "red", "black"]
  ninja.name = name;
  ninja.cohort = cohort;
  ninja.beltLevel = 0;
  ninja.levelUp = function(){
    if (ninja.beltLevel < 2){
      ninja.beltLevel += 1;
      ninja.belt = belts[ninja.beltLevel];
    }
    return ninja
  }
  ninja.belt = belts[ninja.beltLevel];
  return ninja;
}
console.log(ninjaConstructor());
