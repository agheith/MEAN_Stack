var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app = express();

//connect mongoose "basic_mongoose_app" is the name of the database
mongoose.connect('mongodb://localhost/intro_to_mongoose');
//connected our database

var UserSchema = new mongoose.Schema({ //bluprint
    //attributes
    f_name: String,
    l_name: String,
    usernamae: String
})
//craeted a User schema

var PersonSchema = new mongoose.Schema({
    f_name: String,
    l_name: String
});

mongoose.model('Person', PersonSchema);
mongoose.model('User', UserSchema);//this says -i wanna create a model using this schema and wanna call it user.
//SETTER We are setting this Schema in our Models as 'User'
//attached our user schema on to our model

var Person = mongoose.model('Person')
var User = mongoose.model('User')
//GETTER We are retrieving this Schema from our Models, named 'User'
//save that model into a variable
//We set the mongoose.model to the "User" variable so that
//we can run model-like methods on it to make all of the CRUD operations easier.

// var new_user = new User();
// new_user.name = "Amer";
// new_user.email = "amer@amer.com";
// new_user.favorite_dojo = "San Jose";
// new_user.save(function(err, results){
//     console.log(results);
// })


//static content
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded(true));

// view engin
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res){
    res.render('index');
})

app.post('/new', function(req,res){
    console.log(req.body);

    var new_person = new Person(req.body);
    new_person.save(function(err,results){ //this is the database call, Asynchorous
        if(err){
            console.log("error in the back end");
            res.end();
        } else{
            res.redirect('results')
        }
    })
})
//use res.end to test my routes

app.get('/results', function(req,res){
    Person.find({}, function(err,results){
        if(err){
            console.log("error in the back end");
            res.end();
        } else{
            res.render('results', {people: results})
        }
    })
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
