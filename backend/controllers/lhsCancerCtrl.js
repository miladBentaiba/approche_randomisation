/* eslint no-underscore-dangle: 0 */
const { LHSCancer } = require('../models/LHS_cancer');

exports.create = (req, res) => {
  const lHSCancer = new LHSCancer({
    'delegue.BI.un': req.body.delegue.BI.un,
    'delegue.BI.deux': req.body.delegue.BI.deux,
    'delegue.BI.trois': req.body.delegue.BI.trois,
    'delegue.BI.quatre': req.body.delegue.BI.quatre,
    'delegue.BI.cinq': req.body.delegue.BI.cinq,
    'delegue.age': req.body.delegue.age,
    'delegue.shape.round': req.body.delegue.shape.round,
    'delegue.shape.oval': req.body.delegue.shape.oval,
    'delegue.shape.lobular': req.body.delegue.shape.lobular,
    'delegue.shape.irregular': req.body.delegue.shape.irregular,
    'delegue.margin.circumscribed': req.body.delegue.margin.circumscribed,
    'delegue.margin.microlobulated': req.body.delegue.margin.microlobulated,
    'delegue.margin.obscured': req.body.delegue.margin.obscured,
    'delegue.margin.ill_defined': req.body.delegue.margin.ill_defined,
    'delegue.margin.spiculated': req.body.delegue.margin.spiculated,
    'delegue.dencity.high': req.body.delegue.dencity.high,
    'delegue.dencity.iso': req.body.delegue.dencity.iso,
    'delegue.dencity.low': req.body.delegue.dencity.low,
    'delegue.dencity.fat_containing': req.body.delegue.dencity.fat_containing,
    cases: req.body.cases,
  });
  lHSCancer.save((err) => {
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
  LHSCancer.find({}, (err, dbs) => {
    const dbMap = [];
    dbs.forEach((db) => {
      dbMap.push(db);
    });
    res.send(dbMap);
  });
};

exports.get = (req, res) => {
  LHSCancer.findById(req.params._id, (err, db) => {
    if (err) { res.send(err); }
    res.json(db);
  });
};

exports.update = (req, res) => {
  LHSCancer.findOneAndUpdate(req.params._id, req.body, (err, db) => {
    if (err) { res.send(err); }
    res.json(db);
  });
};

exports.delete = (req, res) => {
  LHSCancer.findOneAndRemove(req.params._id, (err, result) => {
    if (err) { throw err; }
    res.send(result);
  });
};
