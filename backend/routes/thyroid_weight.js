var express = require('express');
var routerThyroidWeight = express.Router();

var thyroidWeightCtrl = require('../controllers/thyroidWeightCtrl');

routerThyroidWeight.get('/thyroidweight',thyroidWeightCtrl.getAll);

module.exports = routerThyroidWeight;