var express = require('express');
var  routerWeightCancer = express.Router();

var weightCancerCtrl = require('../controllers/weightCancerCtrl');

routerWeightCancer.get('/weightcancer',weightCancerCtrl.getAll);

/* SAVE Category */
routerWeightCancer.post('/weightcancer/', weightCancerCtrl.create);

module.exports = routerWeightCancer;