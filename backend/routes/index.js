const express = require('express');

const router = express.Router();
const routerRessources = express.Router();
const jwt = require('express-jwt');

const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload',
});

const ctrlProfile = require('../controllers/profile');
const ctrlAuth = require('../controllers/authentication');
// profile
router.get('/users/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/users/register', ctrlAuth.register);
router.post('/users/login', ctrlAuth.login);

// API Server Endpoints
module.exports = {
  protected: router,
  unprotected: routerRessources,
};
