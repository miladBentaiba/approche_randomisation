const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const hbs = require('hbs');

require('./models/db');
require('./config/passport');
const router = require('./routes/index');
const bodyParser = require('./node_modules/body-parser');

const app = express();

hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

app.get('/', (req, res) => {
  res.render('welcome.hbs', {
    pageTitle: 'welcome here!',
    firstSection: 'instructions',
  });
});

app.use((req, res, next) => {
  // allow cross origin requests
  res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, OPTIONS, DELETE, GET');
  res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

const routerCaseCancer = require('./routes/case_cancer');
const routerLHSCancer = require('./routes/lhs_cancer');
const routerRHSCancer = require('./routes/rhs_cancer');
const routerNiveau = require('./routes/niveau');
const routerWeightCancer = require('./routes/weight_cancer');
const routerRuleCancer = require('./routes/rule_cancer');
const routerParameter = require('./routes/parameter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// [SH] Set the app_client folder to serve static resources
app.use(express.static(path.join(__dirname, 'client')));

// [SH] Use the API routes when path starts with /api
app.use(cors());
app.use('/api', passport.initialize(), router.protected);
app.use('/api', router.unprotected);
app.use('/api', routerCaseCancer);
app.use('/api', routerLHSCancer);
app.use('/api', routerRHSCancer);
app.use('/api', routerNiveau);
app.use('/api', routerWeightCancer);
app.use('/api', routerRuleCancer);
app.use('/api', routerParameter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// [SH] Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({ message: `${err.name}: ${err.message}` });
  }
  next(err);
});

// development error handler
if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500); app.get('/', () => {
    });
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

// production error handler
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});

app.listen(4000);

module.exports = app;

