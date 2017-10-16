var express = require('express');
var router = express.Router();
var  routerRessources = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
// profile
router.get('/users/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/users/register', ctrlAuth.register);
router.post('/users/login', ctrlAuth.login);


// API Server Endpoints 
module.exports = {
    protected: router,
    unprotected: routerRessources
};
//module.exports = router;