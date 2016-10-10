var express = require('express');

var app = express();

var handlebars = require('express3-handlebars')
  .create({ defaultLayout: 'main' });

// templating engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// for serving static files
app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.render('home');
});

var fortunes = [
  'Conquer your fears or they will conquer you.',
  'Llamas are greater than alpacas.',
  'Do not fear what you do not know.',
  'Trump for president.',
  'Hillary for president.',
];

app.get('/about', function(req, res) {
  var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', { fortune: randomFortune });
});

app.use(function(req, res) {
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:'
      + app.get('port') + '; press Ctrl-c to terminate');
});

