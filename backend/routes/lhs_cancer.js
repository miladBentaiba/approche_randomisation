var express = require('express');

var  routerLHSCancer = express.Router();

var caseLHSCancer = require('../controllers/lhsCancerCtrl');

routerLHSCancer.get('/lhscancer',caseLHSCancer.getAll);

/* GET SINGLE Category BY ID */
routerLHSCancer.get('/lhscancer/:_id', caseLHSCancer.get);

/* SAVE Category */
routerLHSCancer.post('/lhscancer/', caseLHSCancer.create);

/* UPDATE Category */
routerLHSCancer.put('/lhscancer/:_id', caseLHSCancer.update);

/* DELETE Category */
routerLHSCancer.delete('/lhscancer/:_id', caseLHSCancer.delete);


module.exports = routerLHSCancer;