// get the http module:
var http = require('http'),
// fs module allows us to read and write content for responses!!
    fs = require('fs'),
    port = 5000;


var server = http.createServer(function server(request, response){
//Figure out which file the HTTP request is looking for
    var file;

    console.log("URL:", request.url);

    switch (request.url) {
      case "/":
        file = 'index.html'
        break;
      case "/ninjas":
        file = 'ninjas.html'
        break;
      case "/dojos/new":
        file = 'dojos.html'
        break;
      default:
        file = null;
        break;
    }
    // console.log("FILENAME:", file);
    // response.end();

//Send file or error to browser
if (file !== null){
    fs.readFile(`static/${file}`, 'utf8', function(error, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(contents);
        response.end()
    });
} else { //if file is null
    response.writeHead(404);
    response.end("File not found!");
}
});

server.listen(port, function(){
    console.log("Running on port: ", port);
});
