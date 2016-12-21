var Grocery = require('./models/grocery');
var User = require('./models/user');

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
      expiration: req.body.expiration,
      user: req.body.user
    }, function(err, groceries) {
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
    }, function (err, groceries) {
      if (err) { res.send(err); }
      Grocery.find(function(err, groceries) {
        if (err) { res.send(err); }
        res.json(groceries);
      });
    });
  });

  app.post('/api/signup', function(req, res) {
    console.log(req.body.username);
    User.create({
      username: req.body.username,
      password: req.body.password
    }, function(err, res) {
      if (err) {
        res.send(err);
      }
    });
    // .then(res.redirect('/#/list'));
  });


  app.post('/api/login', function(req, res) {
    User.findOne({username: req.body.username})
    .then(function(user) {
      if (!user) {
        console.log('no user exists with this username');
      } else {
        if (user.password === req.body.password) {
          res.redirect('/#/list');
        }
      }
    });
  });
};
