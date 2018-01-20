const express = require('express');

const routerWeightCancer = express.Router();

const weightCancerCtrl = require('../controllers/weightCancerCtrl');

routerWeightCancer.get('/weightcancer', weightCancerCtrl.getAll);

routerWeightCancer.post('/weightcancer/', weightCancerCtrl.create);

module.exports = routerWeightCancer;
