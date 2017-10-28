var express = require('express');
var  routerParameter = express.Router();

var parameterCtrl = require('../controllers/parameterCtrl');

routerParameter.get('/parameter',parameterCtrl.getAll);

/* SAVE Category */
routerParameter.post('/parameter/', parameterCtrl.create);

/* UPDATE Category */
routerParameter.put('/parameter', parameterCtrl.update);

module.exports = routerParameter;