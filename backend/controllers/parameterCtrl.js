/* eslint no-underscore-dangle: 0 */
const { Parameters } = require('../models/parameters');
const { CaseCancer } = require('../models/case_cancer');

exports.create = (req, res) => {
  const caseCancer = new CaseCancer({
    'problem.BI': req.body.problem.BI,
    'problem.age': req.body.problem.age,
    'problem.shape': req.body.problem.shape,
    'problem.margin': req.body.problem.margin,
    'problem.dencity': req.body.problem.dencity,
    solution: req.body.solution,
    'validity.coherence': req.body.validity.coherence,
    'validity.stochastique': req.body.validity.stochastique,
    'validity.regles': req.body.validity.regles,
    'validity.expert': req.body.validity.expert,
    nb_occurence: req.body.validity.expert,
    by: req.body.by,
    date_maj: req.body.date_maj,
    date_save: req.body.date_save,
  });
  caseCancer.save((err) => {
    if (err) {
      res.send({
        message: 'something went wrong',
      });
    } else {
      res.send({
        message: 'the CaseCancer has been saved',
      });
    }
  });
};

exports.getAll = (req, res) => {
  Parameters.findOne({}, (err, dbs) => {
    res.send(dbs);
  });
};

exports.update = (req, res) => {
  Parameters.findOneAndUpdate(req.body._id, req.body, (err, db) => {
    if (err) { res.send(err); }
    res.json(db);
  });
};

exports.create = (req, res) => {
  const parameters = new Parameters({
    nb_niveaux: req.body.nb_niveaux,
    taille: req.body.taille,
    nb_used_niveaux: req.body.nb_used_niveaux,
    seuil: req.body.seuil,
    coherence: req.body.coherence,
    stochastique: req.body.stochastique,
    regles: req.body.regles,
  });
  parameters.save((err) => {
    if (err) {
      res.send({
        message: 'something went wrong',
      });
    } else {
      res.send({
        message: 'the parameters has been saved',
      });
    }
  });
};
