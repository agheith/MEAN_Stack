// Multiply everything in an array by 5
// Console.log all of the keys and values of an object.



// var myarr = [1,5,25,125,42]
// // for (var index in myarr){
// //     console.log(myarr[index]*5);
// // }
// for (var i = 0; i < myarr.length; i++){
//     console.log(myarr[i]*5);
    //recommended way
}


// ================================================
//           ITERATE THROUGH AN OBJECT
// ================================================


var myobject = {
    language: "Javascript",
    dojo: "San Jose",
    favorite_instructor: "Someone"
}

for (var key in myobject){
    console.log(key, myobject[key] + "the value");
}

Object.keys(myobject).forEach(function(key, value){
    console.log(key, value, myobject[key]);
})



// ================================================
//                 HOISTING
// ================================================

// Sets up in the creation phase the memory space for the varaibles and functions, and its that step thats called hoisting.
// Its not moving code to the top of the page. Before the code is to be executed line by line, the JavaScript engine has set aside memeory space for the variables that I have created in the entire code,
// and all of the functions that i heave created as we;l.
// So these functions and variables exist in memeory. So when the code begins to execute line by line, it can access them. However, when it comes to varaibles its a little bit different. The entire function is placed in to the memory space.
// meaning the function and the code inside is executed. The next execution phase, when it does it line by line, thats when assignments are set. So the JavaScript engine sets up the memory space for 'a' it doesnt know what its value ultimately to be until it starts executing its code.
// So it gives it a placeholer udefindes. which means "oh i dont know what this value is yet". all varaibles in JavaScript are iniitally set to undefined. and functions sit in memeory.

b(); //called b
//console.log(a); // This is defined

var a = "Hello World";
function b(){
    console.log("Called b");
}
console.log(a);

// ================================================
//                 VARIABLES
// ================================================

var myunknown = 'hello';
var mynum = 3;
console.log(typeof(myunknown)); //--> string
console.log(typeof(mynum));


// What happens if you do the following?
console.log(a);
var a = "weird";
// Will it throw an error?  What will it print, if it doesn't throw an error?
// How about this?
console.log(typeof(b));
var b = "weird too";
console.log(typeof(b));

var my_first_variable;
my_first_variable = "Data";
console.log(my_first_variable);

// ================================================
//                 ARRAYS
// ================================================

var empty_array = [];             // create empty array with square brackets  (creates a bureau of drawers)
var string_array = [ "hi", "these", "are", "strings" ];
var x = 15;                       // you can log these vars in the console (even a whole array)
console.log("Logging variables to the console", empty_array, string_array, x);
console.log('2nd value of string_array is ', string_array[1]);
console.log('string_array has a length of', string_array.length);
string_array.push('awesome');      // adding a new value to the array
console.log(string_array);         // you'll note that string_array now has a new value called awesome
string_array.pop();                // removing the last value in the array
console.log(string_array);         // the last value in the array is now gone!

var arr = [3, 6];
arr[234] = "hi";

//console.log( arr.length ); // 235
//console.log( arr[34] ); // undefined
arr.length = 3;
console.log( arr[34] );
console.log( arr[234] );
console.log( arr.length );
arr.length = 500;
console.log( arr[234] );
console.log( arr.length );

// ================================================
//                 FUNCTIONS
// ================================================
// In the world of programming, a function is like a factory. You send the raw materials to the factory/function as arguments,
// which processes those inputs according to a specific process – our logic – and returns a finished product (the return value).

function myFunctionName(firstParameter, secondParameter){
  var myProduct = firstParameter * secondParameter;
  return myProduct
}
//return – this will be whatever the function evaluates to when called. (If left out, the function will automatically return undefined).
//Now onto using a function, also referred to as calling, invoking, executing, starting, or running a function.
//It’s pretty simple: Just write the identifier and pass the data as arguments for each of the parameters.
myFunctionName(5,14);
//After the function was declared,
//the interpreter set aside some memory space to hold the function’s instructions.
//When we invoked the function, we both told the interpreter which set of instructions to use and commanded it to run them (the () is what tells the function to run).
// For every parameter in the function (in this case firstParameter and secondParameter), the interpreter looks for a corresponding argument – i.e. something passed into the function.
// If there is an argument, the interpreter creates memory space for a variable with the name of the parameter equal to the value of the argument.

// Functions in Javascript are known as “First-Class”. This means that they can basically go wherever they want!
// -->Functions can be stored as standalone functions (like above), as the value of variables, or as attributes in a JavaScript object (where they're known as methods)
// -->Functions can be passed as arguments to functions (known as a callback)
// -->Functions can be returned from functions. (This is creating what’s called a closure)

// FUNCTIONS CAN BE OBJECTS

function greet(){
    console.log("hi");
}

greet.language = "english"; //added a property to a function
console.log(greet.language);

// In JavaScript-->  when the function was created, this function object was put in memeory. It has a name "greet".
//it has a code property in the body.
// invoked with greet();
// as an object it can be moved around and copied.



// ================================================
//                 LOOPS
// ================================================
// For-in loops

var ninja = {
  name:'Susanna',
  MEAN_belt:10,
  iOS_belt:10,
  python_belt:10,
  php_belt:9, // she hadn't mastered deploying yet!
  ruby_belt:9.75 // done in 1.5 hrs though!
}
for (var key in ninja) {
  if (ninja.hasOwnProperty(key)) {
    console.log(key);
    console.log(ninja[key]);
  }
}



// ================================================
//                 OBJECTS
// ================================================


var dojo = {};                                 // creates an empty object
dojo = {
  name: 'Coding Dojo',                         // property can store a string
  number_of_students: 25,                      // property can store a number
  instructors: ['Andrew', 'Michael', 'Jay'],   // property can store arrays
  location: {                                  // property can even store another object!
    city: 'San Jose',
    state: 'CA',
    zipcode: 95112
  }
}                                              // access object properties with dot (.) notation
//console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);
 console.log(dojo["name"]);                     // or bracket [] notation (note: specify key in quotes)
// dojo.number_of_students = 40;                  // we can reassign any of the properties
// dojo.location.city = "Bellevue";
// dojo.location.state = "Washington";
// dojo.location.zipcode = "unknown";             // note that we can change this from integer to string
// dojo.phone_number = 1234567890 ;

//Objects and arrays are the two primary ways that JavaScript keeps data associations.
//(And, in fact, arrays are a specific subset of the Object!). Arrays are generally used to keep track of a list of related things of the same type.

//It is very common to see arrays filled with objects, where the objects all have the keys, but with different values.

var glazedDonuts = [
  {
    frosting: 'glazed',
    type: 'old fashioned',
    age: '45',
    time: 'minutes'
  },
  {
    frosting: 'glazed',
    type: 'regular',
    age: '5',
    time: 'minutes'
  },
  {
    frosting: 'glazed',
    type: 'jelly filled',
    age: '1',
    time: 'seconds'
  }
];


//You could then go to the donut owner and ask something like:
//Can I buy the 1st donut on the rack if it has been out of the oven for fewer than 25 minutes? The code conversation for that would be:

var purchase;
//You
if(glazedDonuts[0].age < 25 && (glazedDonuts[0].time == 'seconds' || glazedDonuts[0].time == 'minutes')){
  //shop owner
  purchase = glazedDonuts[0];
}
else {
  console.log('sorry it has been out a bit longer');
}
