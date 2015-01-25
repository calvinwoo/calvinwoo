var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var googleUa;
if (process.env.NODE_ENV === 'production') {
  googleUa = 'UA-58701348-2';
} else {
  googleUa = 'UA-58701348-1';
}

app.get('/', function (req, res) {
  res.render('home', {
    googleUa: googleUa
  });
});

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

var server = app.listen(port, function () {
  console.log('App is running on ' + port);
});
