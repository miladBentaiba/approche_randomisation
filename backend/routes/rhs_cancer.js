const express = require('express');

const routerRHSCancer = express.Router();

const caseRHSCancer = require('../controllers/rhsCancerCtrl');

routerRHSCancer.get('/rhscancer', caseRHSCancer.getAll);

routerRHSCancer.get('/rhscancer/:_id', caseRHSCancer.get);

routerRHSCancer.post('/rhscancer/', caseRHSCancer.create);

routerRHSCancer.put('/rhscancer/:_id', caseRHSCancer.update);

routerRHSCancer.delete('/rhscancer/:_id', caseRHSCancer.delete);

module.exports = routerRHSCancer;
