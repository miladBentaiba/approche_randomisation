const express = require('express');

const routerNiveau = express.Router();

const caseNiveau = require('../controllers/niveauCtrl');

routerNiveau.get('/niveau', caseNiveau.getAll);

routerNiveau.get('/niveau/:_id', caseNiveau.get);

routerNiveau.post('/niveau/', caseNiveau.create);

routerNiveau.put('/niveau/:_id', caseNiveau.update);

routerNiveau.delete('/niveau/:_id', caseNiveau.delete);

module.exports = routerNiveau;
