var express = require('express');
 var  routerCancerWeight = express.Router();
 
var cancerWeightCtrl = require('../controllers/cancerWeightCtrl');

routerCancerWeight.get('/cancerweight',cancerWeightCtrl.getAll);
 
 module.exports = routerCancerWeight;