var express = require('express');
var  routerCaseThyroid = express.Router();

var caseThyroidCtrl = require('../controllers/cancerThyroidCtrl');

routerCaseThyroid.get('/casethyroid',caseThyroidCtrl.getAll);

/* GET SINGLE Category BY ID */
routerCaseThyroid.get('/casethyroid/:_id', caseThyroidCtrl.get);

/* SAVE Category */
routerCaseThyroid.post('/casethyroid/', caseThyroidCtrl.create);

/* UPDATE Category */
routerCaseThyroid.put('/casethyroid/:_id', caseThyroidCtrl.update);


/* DELETE Category */
routerCaseThyroid.delete('/casethyroid/:_id', caseThyroidCtrl.delete);


module.exports = routerCaseThyroid;