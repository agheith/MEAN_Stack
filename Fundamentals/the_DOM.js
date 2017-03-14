//When an HTML (or XML) file is interpreted by a browser, it also generates what we call the Document Object Model (DOM)
//a representation of the entire web page as objects. We can manipulate these objects with JavaScript.

//You can think of the document as a big container, inside of which sits information (properties) and instructions (methods).

//You can access these objects – for example, the body – by calling  document.body in the console.

//fetching the object requires you to use a built-in method such as getElementsByTagName ( e.g. document.getElementsByTagName('div')).
//This will return an array of DOM elements.

console.log(document.body);
//Sets or returns the document's body (the <body> element) "w3schools"

var bod = document.body;
// this is more fun if it's a random page with stuff already on it (like the learning platform for example).
bod = "<h1>Hello World</h1>";


var bod = document.body;
for (var i = 0; i < 10; i ++){
  bod += "<p> This has gone through the loop completely: " +i+ " times </p>";
}


var paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
for (var i = 0; i < paragraphs.length; i ++){
  console.log(paragraphs[i].addEventListener);
  paragraphs[i].addEventListener('click', function(){
    this.style.background='blue';
  });
}
