var express = require('express');
var app = express();
var routes = require('./routes/route-handler');
app.set('port', process.env.PORT || 3000);

// set up handlebars view engine
var handlebars = require('express3-handlebars')
    .create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use('/', routes);


// 404 Handler
app.use(function (req, res) {
    res.status(404);
    res.render('404');
});

// 500 Handler
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.');
});
