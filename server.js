var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect('mongodb://localhost/whats-in-my-pantry');

app.use(express.static(__dirname + '/client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

app.get('/', function(req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT || 8080);
console.log('App listening on port 8080');
