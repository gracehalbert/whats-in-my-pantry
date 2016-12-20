var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var uri = process.env.MONGODB_URI;
var port = process.env.PORT || 3000;

mongoose.connect(uri);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

require('./app/routes.js')(app);

app.listen(port);
console.log('App listening on port ' + port);

// || 'mongodb://localhost/pantrydb'
