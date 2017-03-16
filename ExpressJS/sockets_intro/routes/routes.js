// I am creating a root route for the form...
module.exports = function(app){

    app.get('/', function(request, response){
        response.render('index');
    })

}
