
/*
var Amer = {
    first_name: "Amer",
    last_name: "Gheith",
    sayName: function(){
        console.log("Amer");
    }
}
*/
//Amer.sayName(); // Object.property


// make a function that we can invoke, then pass in a name

function NewPerson(name){
    return{
        // return an object
        first_name: name,
        sayName: function(){
            console.log(name);
        }
    }
}

var Amer = NewPerson("Amer");
var Hana = NewPerson("Hana");
Amer.sayName();
Hana.sayName();


function Person(name){
    console.log(this);
    this.name = name;
    this.sayName = function(){
        console.log(name);
    }
}

var Hamza = new Person("Hamza");
Hamza.sayName();
