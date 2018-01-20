/* eslint no-underscore-dangle: 0 */
const { RuleCancer } = require('../models/rule_cancer');

exports.create = (req, res) => {
  const ruleCancer = new RuleCancer({
    regle: req.body.regle,
    confiance: req.body.confiance,
    generalite: req.body.generalite,
    date_maj: req.body.date_maj,
    by: req.body.by,
    date_save: req.body.date_save,
  });
  ruleCancer.save((err) => {
    if (!err) {
      res.send({
        message: 'the RuleCancer has been saved',
      });
    } else {
      res.send({
        message: 'something went wrong',
      });
    }
  });
};

exports.getAll = (req, res) => {
  RuleCancer.find({}, (err, dbs) => {
    const dbMap = [];
    dbs.forEach((db) => {
      dbMap.push(db);
    });
    res.send(dbMap);
  });
};

exports.get = (req, res) => {
  RuleCancer.findById(req.params._id, (err, db) => {
    if (err) { res.send(err); }
    res.json(db);
  });
};

exports.update = (req, res) => {
  RuleCancer.findOneAndUpdate(req.params._id, req.body, (err, db) => {
    if (err) { res.send(err); }
    res.json(db);
  });
};

exports.delete = (req, res) => {
  RuleCancer.findOneAndRemove(req.params._id, (err, result) => {
    if (err) { throw err; }
    res.send(result);
  });
};
