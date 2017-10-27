var express = require('express');
var  routerRuleThyroid = express.Router();

var ruleThyroidCtrl = require('../controllers/ruleThyroidCtrl');

routerRuleThyroid.get('/rulethyroid',ruleThyroidCtrl.getAll);

/* GET SINGLE Category BY ID */
routerRuleThyroid.get('/rulethyroid/:_id', ruleThyroidCtrl.get);

/* SAVE Category */
routerRuleThyroid.post('/rulethyroid/', ruleThyroidCtrl.create);

/* UPDATE Category */
routerRuleThyroid.put('/rulethyroid/:_id', ruleThyroidCtrl.update);

/* DELETE Category */
routerRuleThyroid.delete('/rulethyroid/:_id', ruleThyroidCtrl.delete);


module.exports = routerRuleThyroid;