var express = require('express');

var  routerNiveau = express.Router();

var caseNiveau = require('../controllers/niveauCtrl');

routerNiveau.get('/niveau',caseNiveau.getAll);

/* GET SINGLE Category BY ID */
routerNiveau.get('/niveau/:_id', caseNiveau.get);

/* SAVE Category */
routerNiveau.post('/niveau/', caseNiveau.create);

/* UPDATE Category */
routerNiveau.put('/niveau/:_id', caseNiveau.update);

/* DELETE Category */
routerNiveau.delete('/niveau/:_id', caseNiveau.delete);


module.exports = routerNiveau;