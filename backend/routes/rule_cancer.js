var express = require('express');
var  routerRuleCancer = express.Router();

var ruleCancerCtrl = require('../controllers/ruleCancerCtrl');

routerRuleCancer.get('/rulecancer',ruleCancerCtrl.getAll);

/* GET SINGLE Category BY ID */
routerRuleCancer.get('/rulecancer/:_id', ruleCancerCtrl.get);

/* SAVE Category */
routerRuleCancer.post('/rulecancer/', ruleCancerCtrl.create);

/* UPDATE Category */
routerRuleCancer.put('/rulecancer/:_id', ruleCancerCtrl.update);

/* DELETE Category */
routerRuleCancer.delete('/rulecancer/:_id', ruleCancerCtrl.delete);


module.exports = routerRuleCancer;