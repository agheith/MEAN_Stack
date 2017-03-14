//var this = {}; and return this; can and should be removed...

function NinjaConstructor(name, prevOccupation) {
  // var this = {}; // <-- PAY ATTENTION TO THIS LINE!
  this.name = name;
  this.prevOccupation = prevOccupation;
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
  }
  // return this; // <-- AND THIS LINE!
}
// /...because the new keyword placed before invoking the function will do that for us!
var dylan = new NinjaConstructor('Dylan', 'Construction Worker');
console.log(dylan.name);
