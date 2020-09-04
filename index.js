var express = require('express');
var app = express();
const sendMail = require('./mail.js')
var routes = require('./routes/route-handler');
app.set('port', process.env.PORT || 3000);

// set up handlebars view engine
var handlebars = require('express3-handlebars')
    .create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

//send email
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.post('/email', (req, res) =>{
    // console.log('Data: ', req.body);
    const {name, email, subject, message} = req.body;
    sendMail(name, email, subject, message, function(err, data){
        if(err){
            res.status(500).json({message :'Internal Error'})
        }
        else {
            res.json({message: 'Email sent!'})
        }
    });
});

// Route handler
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
