var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
x.push(100, ["hello", "world", "JavaScript is Fun"]);
console.log(x);

//Create a simple for loop that sums all the numbers between 1 to 500
    var sum = 0;
for (var i = 1; i <= 500 ; i++){
    sum = sum + i;
}
console.log(sum);

//find the minimum value, and then print it
var arr = [1, 5, 90, 25, -3, 0];
var min = arr[0];

for (var i = 0; i < arr.length; i++){
    if(min > arr[i]){
        min = arr[i];
    }
}
console.log(min);


// find the average of all of the values
var arr = [1, 5, 90, 25, -3, 0];
var sum = 0;
for (var i = 0; i < arr.length; i++){
    sum = sum+arr[i];
}
console.log("Average is: " + sum/arr.length);

//Write a for-in loop that will navigate through the object below
var newNinja = {
 name: 'Amer',
 profession: 'coder',
 favorite_language: 'JavaScript',
 dojo: 'San Jose'
}

for (var key in newNinja){
    console.log(key + ": " + newNinja[key]);
}
