const express = require('express');

const routerLHSCancer = express.Router();

const caseLHSCancer = require('../controllers/lhsCancerCtrl');

routerLHSCancer.get('/lhscancer', caseLHSCancer.getAll);

routerLHSCancer.get('/lhscancer/:_id', caseLHSCancer.get);

routerLHSCancer.post('/lhscancer/', caseLHSCancer.create);

routerLHSCancer.put('/lhscancer/:_id', caseLHSCancer.update);

routerLHSCancer.delete('/lhscancer/:_id', caseLHSCancer.delete);

module.exports = routerLHSCancer;
