var express = require('express');
var routerThyroidWeight = express.Router();

var thyroidWeightCtrl = require('../controllers/thyroidWeightCtrl');

routerThyroidWeight.get('/thyroidweight',thyroidWeightCtrl.getAll);


/* GET SINGLE Category BY ID */
routerThyroidWeight.get('/thyroidweight/:_id', thyroidWeightCtrl.get);

/* SAVE Category */
routerThyroidWeight.post('/thyroidweight/', thyroidWeightCtrl.create);

/* UPDATE Category */
routerThyroidWeight.put('/thyroidweight/:_id', thyroidWeightCtrl.update);


/* DELETE Category */
routerThyroidWeight.delete('/thyroidweight/:_id', thyroidWeightCtrl.delete);


module.exports = routerThyroidWeight;