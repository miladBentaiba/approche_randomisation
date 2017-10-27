var express = require('express');
var  routerWeightThyroid = express.Router();

var weightThyroidCtrl = require('../controllers/weightThyroidCtrl');

routerWeightThyroid.get('/weightthyroid',weightThyroidCtrl.getAll);

/* SAVE Category */
routerWeightThyroid.post('/weightthyroid/', weightThyroidCtrl.create);

module.exports = routerWeightThyroid;