var express = require('express');

var  routerLHSThyroid = express.Router();

var caseLHSThyroid = require('../controllers/lhsThyroidCtrl');

routerLHSThyroid.get('/lhsthyroid',caseLHSThyroid.getAll);

/* GET SINGLE Category BY ID */
routerLHSThyroid.get('/lhsthyroid/:_id', caseLHSThyroid.get);

/* SAVE Category */
routerLHSThyroid.post('/lhsthyroid/', caseLHSThyroid.create);

/* UPDATE Category */
routerLHSThyroid.put('/lhsthyroid/:_id', caseLHSThyroid.update);

/* DELETE Category */
routerLHSThyroid.delete('/lhsthyroid/:_id', caseLHSThyroid.delete);


module.exports = routerLHSThyroid;