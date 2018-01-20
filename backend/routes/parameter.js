const express = require('express');

const routerParameter = express.Router();

const parameterCtrl = require('../controllers/parameterCtrl');

routerParameter.get('/parameter', parameterCtrl.getAll);

routerParameter.post('/parameter/', parameterCtrl.create);

routerParameter.put('/parameter', parameterCtrl.update);

module.exports = routerParameter;
