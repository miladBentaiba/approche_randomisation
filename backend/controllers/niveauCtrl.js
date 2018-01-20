/* eslint no-underscore-dangle: 0 */
const { Niveau } = require('../models/niveau');

exports.create = (req, res) => {
  const niveau = new Niveau({
    rang: req.body.rang,
    debut: req.body.debut,
    fin: req.body.fin,
    case_cancer: req.body.case_cancer,
  });
  niveau.save((err) => {
    if (err) {
      res.send({
        message: 'something went wrong',
      });
    } else {
      res.send({
        message: 'the niveau has been saved',
      });
    }
  });
};

exports.getAll = (req, res) => {
  Niveau.find({}, (err, dbs) => {
    const dbMap = [];
    dbs.forEach((db) => {
      dbMap.push(db);
    });
    res.send(dbMap);
  });
};

exports.get = (req, res) => {
  Niveau.findById(req.params._id, (err, db) => {
    if (err) { res.send(err); }
    res.json(db);
  });
};

exports.update = (req, res) => {
  Niveau.findOneAndUpdate(req.params._id, req.body, (err, db) => {
    if (err) { res.send(err); }
    res.json(db);
  });
};

exports.delete = (req, res) => {
  Niveau.findOneAndRemove(req.params._id, (err, result) => {
    if (err) { throw err; }
    res.send(result);
  });
};
