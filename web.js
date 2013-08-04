var express = require('express');
var app = express();
app.use(express.logger());
app.use(express.static(__dirname + '/public'));

var fs = require('fs');

app.get('/', function(request, response) {
  var indexHtml = fs.readFileSync('index.html');
  response.send(indexHtml.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});