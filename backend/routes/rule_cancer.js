const express = require('express');

const routerRuleCancer = express.Router();

const ruleCancerCtrl = require('../controllers/ruleCancerCtrl');

routerRuleCancer.get('/rulecancer', ruleCancerCtrl.getAll);

routerRuleCancer.get('/rulecancer/:_id', ruleCancerCtrl.get);

routerRuleCancer.post('/rulecancer/', ruleCancerCtrl.create);

routerRuleCancer.put('/rulecancer/:_id', ruleCancerCtrl.update);

routerRuleCancer.delete('/rulecancer/:_id', ruleCancerCtrl.delete);

module.exports = routerRuleCancer;
