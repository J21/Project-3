var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.set('port', (process.env.PORT || 3000));


// First page when user goes to website
app.get('/', function(req, res){
  res.render('first', {
    content: 'First Page',    // put {{content}}  to index, it will show string text
    published: true     //conditionals
  });
});

app.get('/home', function(req, res){
  res.render('home');
});

app.get('/world', function(req, res){
	res.render('world');
});

app.get('/signup', function(req, res){
	res.render('signup');
});

app.listen(app.get('port'), function(){
  console.log('Server started on Port ' + app.get('port'));
});