var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
require('dotenv').config();

var app = express();
var port = process.env.PORT;
var uri = process.env.URI;

mongoose.connect(uri);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());
app.use(express.static('client'));

var Item = mongoose.model('Item', {
  text: String
});

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/login', function(req, res) {
  console.log('node login redirect');
  res.render('login.html');
});

app.get('*', function(req, res) {
  res.render('index');
});

// app.get('/api/items', function(req, res) {
//   Item.find(function(err, items) {
//     if (err) { res.send(err); }
//     res.json(items);
//   })
// });
//
// app.post('/api/items', function(req, res) {
//   Item.create({
//     text: req.body.text,
//     done: false
//   }, function(err, item) {
//     if (err) { res.send(err); }
//     Item.find(function(err, items) {
//       if (err) { res.send(err); }
//       res.json(items);
//     });
//   });
// });
//
// app.delete('/api/todos/:todo_id', function(req, res) {
//   Item.remove({
//
//   })
// })

app.listen(port || 8080);
console.log('App listening ' + port);
