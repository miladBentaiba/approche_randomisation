var express = require('express');

var  routerRHSCancer = express.Router();

var caseRHSCancer = require('../controllers/rhsCancerCtrl');

routerRHSCancer.get('/rhscancer',caseRHSCancer.getAll);

/* GET SINGLE Category BY ID */
routerRHSCancer.get('/rhscancer/:_id', caseRHSCancer.get);

/* SAVE Category */
routerRHSCancer.post('/rhscancer/', caseRHSCancer.create);

/* UPDATE Category */
routerRHSCancer.put('/rhscancer/:_id', caseRHSCancer.update);

/* DELETE Category */
routerRHSCancer.delete('/rhscancer/:_id', caseRHSCancer.delete);


module.exports = routerRHSCancer;