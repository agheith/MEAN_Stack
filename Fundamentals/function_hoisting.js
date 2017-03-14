awesome();
function awesome() {
  console.log("too good to be true");
}


// JS rearranges your code before running it
function awesome() {     // the function floated to the top!
console.log("too good to be true");
}
awesome();               // so now awesome is defined before we invoke it!


varFunction();
var varFunction = function() {
  console.log("How will this get hoisted?")
}


var varFunction;           // the variable declaration gets hoisted to the top
varFunction();             // this tries to invoke "undefined": we get "undefined is not a function"
varFunction = function() {
  console.log("How will this get hoisted?")
}
