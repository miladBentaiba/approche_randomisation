import cancerWeightCtrl from '../controllers/weightCancerCtrl';

const express = require('express');

const routerCancerWeight = express.Router();
routerCancerWeight.get('/cancerweight', cancerWeightCtrl.getAll);

module.exports = routerCancerWeight;
