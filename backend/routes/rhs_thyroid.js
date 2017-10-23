var express = require('express');

var  routerRHSThyroid = express.Router();

var caseRHSThyroid = require('../controllers/rhsThyroidCtrl');

routerRHSThyroid.get('/rhsthyroid',caseRHSThyroid.getAll);

/* GET SINGLE Category BY ID */
routerRHSThyroid.get('/rhsthyroid/:_id', caseRHSThyroid.get);

/* SAVE Category */
routerRHSThyroid.post('/rhsthyroid/', caseRHSThyroid.create);

/* UPDATE Category */
routerRHSThyroid.put('/rhsthyroid/:_id', caseRHSThyroid.update);

/* DELETE Category */
routerRHSThyroid.delete('/rhsthyroid/:_id', caseRHSThyroid.delete);


module.exports = routerRHSThyroid;