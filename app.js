var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(port, function () {
  console.log('App is running on ' + port);
});
