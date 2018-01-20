const { WeightCancer } = require('../models/weight_cancer');

exports.getAll = (req, res) => {
  WeightCancer.find({}, (err, dbs) => {
    const dbMap = [];
    dbs.forEach((db) => {
      dbMap.push(db);
    });
    res.send(dbMap);
  });
};

exports.create = (req, res) => {
  const weightCancer = new WeightCancer({
    weight: req.body.weight,
    attrib: req.body.attrib,
  });
  weightCancer.save((err) => {
    if (err) {
      res.send({
        message: 'something went wrong',
      });
    } else {
      res.send({
        message: 'the Case Weight has been saved',
      });
    }
  });
};
