var express = require('express');
 var  routerCancerWeight = express.Router();
 
var cancerWeightCtrl = require('../controllers/cancerWeightCtrl');

routerCancerWeight.get('/cancerweight',cancerWeightCtrl.getAll);
 
 
/* GET SINGLE Category BY ID */
routerCancerWeight.get('/cancerweight/:_id', cancerWeightCtrl.get);

/* SAVE Category */
routerCancerWeight.post('/cancerweight/', cancerWeightCtrl.create);

/* UPDATE Category */
routerCancerWeight.put('/cancerweight/:_id', cancerWeightCtrl.update);
 

/* DELETE Category */
routerCancerWeight.delete('/cancerweight/:_id', cancerWeightCtrl.delete);
 
 
 module.exports = routerCancerWeight;