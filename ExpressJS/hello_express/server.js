// Load the express module (Where do you think this comes from?)
var express = require ("express"); // experss is a node module

//// invoke var express and store the resulting application in var app
// /invoke the function returned to the express variable.
// Requiring "express" returns a "CreateApplication" function that we store in the express variable before we invoke it.
var app = express();

// handle base route to index URl.
// let's handle the base route "/" and respond with "Hello Express"
app.get('/', function(request, response){
    response.send("Hello Express");
})
app.use(express.static(__dirname + "/static"));
console.log(__dirname);
//We have loaded the express module into our server file,
// invoked it to create the server itself, and created a route for the server to handle.

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// new route
app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
// Notice we are passing a JavaScript object to the response.render() method.
// That way, when we pass a piece of data to a view, every key-value pair within the larger piece of data becomes its own variable.      
})

//Listen
app.listen(8001, function(){
    console.log("Listening on 8001");
})


// /Navigate to your directory through the terminal and run npm install from inside of the "Hello Express" directory.
// sudo npm install express
// npm install ejs
