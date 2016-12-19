var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
var port = process.env.PORT;
var uri = process.env.URI;

mongoose.connect(uri);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

var Item = mongoose.model('Item', {
  text: String
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
