const express = require('express');

const routerCaseCancer = express.Router();

const caseCancerCtrl = require('../controllers/caseCancerCtrl');

routerCaseCancer.get('/casecancer', caseCancerCtrl.getAll);

routerCaseCancer.get('/casecancer/:_id', caseCancerCtrl.get);

routerCaseCancer.post('/casecancer/', caseCancerCtrl.create);

routerCaseCancer.put('/casecancer/:_id', caseCancerCtrl.update);

routerCaseCancer.delete('/casecancer/:_id', caseCancerCtrl.delete);

module.exports = routerCaseCancer;
