var express = require('express');
var  routerCaseCancer = express.Router();
 
var caseCancerCtrl = require('../controllers/caseCancerCtrl');
 
 routerCaseCancer.get('/casecancer',caseCancerCtrl.getAll);

/* GET SINGLE Category BY ID */
routerCaseCancer.get('/casecancer/:_id', caseCancerCtrl.get);

/* SAVE Category */
routerCaseCancer.post('/casecancer/', caseCancerCtrl.create);

/* UPDATE Category */
routerCaseCancer.put('/casecancer/:_id', caseCancerCtrl.update);
 

/* DELETE Category */
routerCaseCancer.delete('/casecancer/:_id', caseCancerCtrl.delete);
 
 
 module.exports = routerCaseCancer;