var express = require('express'); //express modoule
var app = express(); //define apps as instance of express
//root route 

app.get('/', function(request, response){
	response.send('I changed the text')
});

app.listen(7000);

console.log('server is runnin on port 7000');
