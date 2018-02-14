
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const app = express();

var port = 3000;
//serve up public folder and all content as static files to server.
app.use(express.static('public'));
//use bodyParser, do not encode url
app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
//require handlebars
var exphbs = require('express-handlebars');
//use handlebars engine as template engine, use 'main' as our base file
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//link to burger controller, set as default page"/"
var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

app.listen(process.env.PORT || port);