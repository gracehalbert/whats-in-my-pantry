var Grocery = require('./models/grocery');

module.exports = function(app) {
  app.get('/api/groceries', function(req, res) {
    Grocery.find(function(err, groceries) {
      if (err) { res.send(err); }
      res.json(groceries);
    });
  });

  app.post('/api/groceries', function(req, res) {
    Grocery.create({
      text: req.body.text,
      size: req.body.size,
      quantity: req.body.quantity,
      purchase: req.body.purchase,
      expiration: req.body.expiration
    }, function(err, todo) {
      if (err) { res.send(err); }
      Grocery.find(function(err, groceries) {
        if (err) { res.send(err); }
        res.json(groceries);
      });
    });
  });

  app.delete('/api/groceries/:grocery_id', function(req, res) {
    Grocery.remove({
      _id: req.params.grocery_id
    }, function (err, todo) {
      if (err) { res.send(err); }
      Grocery.find(function(err, groceries) {
        if (err) { res.send(err); }
        res.json(groceries);
      });
    });
  });
};
