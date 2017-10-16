var express = require('express');
 var  routerCaseWeight = express.Router();
 
var caseWeightCtrl = require('../controllers/caseWeightCtrl');
 
 routerCaseWeight.get('/caseweight',caseWeightCtrl.getAll);
 
 
/* GET SINGLE Category BY ID */
routerCaseWeight.get('/caseweight/:_id', caseWeightCtrl.get);

/* SAVE Category */
routerCaseWeight.post('/caseweight/', caseWeightCtrl.create);

/* UPDATE Category */
routerCaseWeight.put('/caseweight/:_id', caseWeightCtrl.update);
 

/* DELETE Category */
routerCaseWeight.delete('/caseweight/:_id', caseWeightCtrl.delete);
 
 
 module.exports = routerCaseWeight;