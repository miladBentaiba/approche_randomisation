/* eslint no-underscore-dangle: 0 */
const { CaseCancer } = require('../models/case_cancer');

exports.create = (req, res) => {
  CaseCancer(req.body).save((err) => {
    if (err) {
      // console.log(err);
      res.send({
        message: 'something went wrong',
      });
    } else {
      // console.log(insertedItem._id);
      res.send({
        message: 'the CaseCancer has been saved',
      });
    }
  });
};

exports.getAll = (req, res) => {
  if (Object.keys(req.query).length === 0) {
    CaseCancer.find({}, (err, dbs) => {
      const dbMap = [];
      dbs.forEach((db) => {
        dbMap.push(db);
      });
      res.send(dbMap);
    });
  } else {
    CaseCancer.findOne(req.query, (err, dbs) => {
      res.send(dbs);
    });
  }
};

exports.get = (req, res) => {
  CaseCancer.findById(req.params._id, (err, db) => {
    if (err) { res.send(err); }
    res.json(db);
  });
};

exports.update = (req, res) => {
  CaseCancer.findOneAndUpdate(req.params._id, req.body, (err, db) => {
    if (err) { res.send(err); }
    res.json(db);
  });
};

exports.delete = (req, res) => {
  CaseCancer.findOneAndRemove(req.params._id, (err, result) => {
    if (err) { throw err; }
    res.send(result);
  });
};
