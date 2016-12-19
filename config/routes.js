app.use(session({
  secret: 'pantry',
  resave: false,
  saveUninitialized: true
}));

var isLoggedIn = function() {};


app.get('/', isLoggedIn, function(req, res, next) {
  res.render('/client/index')
});

app.get('/login', function(req, res) {
  res.render('login');
});

app.get('/signup', function(req, res) {
  res.render('signup');
});

app.get('/pantry', isLoggedIn, function(req, res, next) {
  //database query to get all items
});

app.post('/login', function(req, res) {
  //check if user already exists
  //if not redirect to signup
  //check if password matches
  //if not display error
  //create session
});

app.post('/signup', function(req, res) {
  //check if user already exists
  //if so display error
  //add user to database
  //create session
});

app.post('/pantry', isLoggedIn, function(req, res, next) {
  //create new database entry

});
