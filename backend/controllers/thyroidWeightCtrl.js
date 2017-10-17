var mongoose = require('mongoose');
var ThyroidWeight = require('../models/thyroid_weight').ThyroidWeight;
/** create function to create CaseWeight */
exports.create = function (req, res) {
    var thyroidWeight =new ThyroidWeight({
        BI: req.body.BI,
        age: req.body.age,
        shape: req.body.shape,
        margin: req.body.margin,
        dencity: req.body.dencity, });
    thyroidWeight.save(function (err) {
        if (err) {
            console.log(err);
            res.send({
                message: 'something went wrong'
            });
        } else {
            res.send({
                message: 'the CaseWeight has been saved'
            });
        }
        // saved!
    })};
/******************/
exports.getAll = function (req, res) {
    ThyroidWeight.find({}, function(err, dbs) {
        var dbMap = [];
        dbs.forEach(function(db) {
            dbMap.push( db);
        });
        res.send(dbMap);
    });
};

/** getCaseWeight function to get CaseWeight by id. */
exports.get = function (req, res) {
    ThyroidWeight.findById(req.params._id, function(err, db) {
        if (err)
            res.send(err);
        res.json(db);
    });
};

/** updateCaseWeight function to get CaseWeight by id. */
exports.update = function (req, res) {
    // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.dbId.
// Find the existing resource by ID
    ThyroidWeight.findOneAndUpdate(req.params._id, req.body, function (err, db) {
        // Handle any possible CaseWeight errors
        if (err)
            res.send(err);
        res.json(db);
    });
}
/** removeCaseWeight function to get CaseWeight by id. */
exports.delete = function (req, res) {
    ThyroidWeight.findOneAndRemove(req.params._id, function(err, result) {
        if(err) { throw err; }
        res.send(result);
    });
}