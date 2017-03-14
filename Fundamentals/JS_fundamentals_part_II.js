//Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
//Write a loop that will go through an array, find the minimum value, and then return it
//Write a loop that will go through an array, find the average of all of the values, and then return it.
function sumXY(x, y){
    var sum = 0;
    for (var i = 0; i < y + 1; i++){
        sum = sum + i;
    }
    return sum;
}
console.log(sumXY(1,5));

// ===================================

function min(arr){
    var min = arr[0];
    for (var i = 0; i < arr.length; i++){
        if( min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}
arr = [4,3,6,7,2]
console.log(min(arr));
// ===================================

function findMin(arr) {
    if (arr) {
        var min = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
}
arr = [4,3,6,7,2]
console.log(findMin(arr));
// ===================================

function avg(arr){
    sum = 0;
    for (var i =0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum/arr.length;
}
arr = [1,2,3,4,5]
console.log(avg(arr));
// ===================================


//Rewrite these 3 as anonymous functions assigned to variables.
var sumXY = function sumXY(x, y){
    var sum = 0;
    for (var i = 0; i < y + 1; i++){
        sum = sum + i;
    }
    return sum;
}
console.log(sumXY(1,5));
// =============
var min = function min(arr){
    var min = arr[0];
    for (var i = 0; i < arr.length; i++){
        if( min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}
arr = [4,3,6,7,2]
console.log(min(arr));
// =============
var avg = function avg(arr){
    sum = 0;
    for (var i =0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum/arr.length;
}
arr = [1,2,3,4,5]
console.log(avg(arr));

// ===================================
//Rewrite these as methods of an object

var myObject = {

    sumXY : function sumXY(x, y){
        var sum = 0;
        for (var i = 0; i < y + 1; i++){
            sum = sum + i;
        }
        return sum;
    },// ends the sumXY function

    avg : function avg(arr){
        sum = 0;
        for (var i =0; i < arr.length; i++){
            sum = sum + arr[i];
        }
        return sum/arr.length;
    },// ends the avg function

    min : function min(arr){
        var min = arr[0];
        for (var i = 0; i < arr.length; i++){
            if( min > arr[i]){
                min = arr[i];
            }
        }
        return min;
    }// ends the min function
}
console.log(myObject.sumXY(0,2)); // 0+1+2=3
console.log(myObject.min([1,2,3,4,5,6,0])); // min is 0

// ===================================
//Create a JavaScript object called person with the following properties/methods
// name - set this as your own name distance_traveled - set this initially as zero

//say_name - should alert the object’s name property

//say_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.

//walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
//run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
//crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1


var person = {

    name : "Amer",
    distance_traveled : 0,
    say_name : function(){
        console.log(person.name);// output is the person's(the object's) name --> Amer.
    },

    say_something : function(parameter){
        console.log(`${person.name} says: ${parameter}`);
    },

    walk : function(){
        console.log(`${person.name} is walking`);
        person.distance_traveled += 3;//increase distance_traveled by 3
        return person;
    },

    run : function(){
        console.log(`${person.name} is running`);
        person.distance_traveled += 10;
        return person;
    },

    crawl : function(){
        console.log(`${person.name} is crawling`);
        person.distance_traveled += 1;
        return person;
    },

    chewGum : function(){
        console.log("I can walk and chew gum, but I can't chew gum and walk...");
    }

}
person.say_something("something") // Amer says something
console.log(person.distance_traveled); //0
person.walk().run().crawl(); // += 3
console.log(person.distance_traveled);// --> 14
