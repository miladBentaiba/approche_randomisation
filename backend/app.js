var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');


// [SH] Require Passport
var passport = require('passport');

// [SH] Bring in the data model
require('./models/db');
// [SH] Bring in the Passport config after model is defined
require('./config/passport');


// [SH] Bring in the routes for the API (delete the default routes)


var app = express();  
  app.use(function(req, res, next) { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "http://localhost:4000");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", true);
        next();
    });
 
var router = require('./routes/index');
var routerCaseCancer=require('./routes/case_cancer');
var routerCaseThyroid=require('./routes/case_thyroid');
var routerLHSCancer=require('./routes/lhs_cancer');
var routerRHSCancer=require('./routes/rhs_cancer');
var routerRHSThyroid=require('./routes/rhs_thyroid');
var routerLHSThyroid=require('./routes/lhs_thyroid');
var routerNiveau=require('./routes/niveau');
var routerWeightCancer=require('./routes/weight_cancer');
var routerWeightThyroid=require('./routes/weight_thyroid');
var routerRuleThyroid=require('./routes/rule_thyroid');
var routerRuleCancer=require('./routes/rule_cancer');
var routerParameter=require('./routes/parameter');
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'uploads')));
//app.use('/uploads', express.static(path.join(__dirname + '/uploads')));

// [SH] Set the app_client folder to serve static resources
app.use(express.static(path.join(__dirname, 'client')));
// [SH] Initialise Passport before using the route middleware
// [SH] Use the API routes when path starts with /api
app.use(cors());
app.use('/api', passport.initialize(), router.protected);
app.use('/api', router.unprotected);
app.use('/api', routerCaseCancer);
app.use('/api', routerCaseThyroid);
app.use('/api', routerLHSCancer);
app.use('/api', routerRHSCancer);
app.use('/api', routerRHSThyroid);
app.use('/api', routerLHSThyroid);
app.use('/api', routerNiveau);
app.use('/api', routerWeightCancer);
app.use('/api', routerWeightThyroid);
app.use('/api', routerRuleThyroid);
app.use('/api', routerRuleCancer);
app.use('/api', routerParameter);


// [SH] Otherwise render the index.html page for the Angular SPA
// [SH] This means we don't have to map all of the SPA routes in Express
/*app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'client', 'index'));
});
 */

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// [SH] Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
   next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);app.get('/', function (request, response) {
  // do something here
})
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
if (module === require.main) {
  // Start the server
  const server = app.listen(4000, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
};
 
var generator = require('./generator');

app.get("/api/generator", function(req, res) {
  var number = req.params.number;
  var helloWorldArray = generator.generateHelloWorlds(number);

  res.send(200, helloWorldArray);
});exports.closeServer = function(){
  server.close();
};
module.exports = app;
