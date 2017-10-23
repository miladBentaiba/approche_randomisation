var mongoose = require('mongoose');
var LHSThyroid = require('../models/LHS_thyroid').LHSThyroid;
/** create function to create CaseCancer */
exports.create = function (req, res) {
    console.log( req.body);
    var lHSThyroid =new LHSThyroid({
        "delegue.T3": req.body.delegue.T3,
        "delegue.thyro": req.body.delegue.thyro,
        "delegue.trido": req.body.delegue.trido,
        "delegue.TSH": req.body.delegue.TSH,
        "delegue.TS": req.body.delegue.TS,
        "cases": req.body.cases,
        "cases": req.body.cases
    });
    lHSThyroid.save(function (err) {
        if (err) {
            console.log(err);
            res.send({
                message: 'something went wrong'
            });
        } else {
            res.send({
                message: 'the CaseThyroid has been saved'
            });
        }
        // saved!
    })};
/******************/
exports.getAll = function (req, res) {
    LHSThyroid.find({}, function(err, dbs) {
        var dbMap = [];
        dbs.forEach(function(db) {
            dbMap.push( db);
        });
        res.send(dbMap);
    });
};

/** getCaseCancer function to get CaseCancer by id. */
exports.get = function (req, res) {
    LHSThyroid.findById(req.params._id, function(err, db) {
        if (err)
            res.send(err);
        res.json(db);
    });
};

/** updateCaseCancer function to get CaseCancer by id. */
exports.update = function (req, res) {
    // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.dbId.
// Find the existing resource by ID
    LHSThyroid.findOneAndUpdate(req.params._id, req.body, function (err, db) {
        // Handle any possible CaseCancer errors
        if (err)
            res.send(err);
        res.json(db);
    });
}
/** removeCaseCancer function to get CaseCancer by id. */
exports.delete = function (req, res) {
    LHSThyroid.findOneAndRemove(req.params._id, function(err, result) {
        if(err) { throw err; }
        res.send(result);
    });
}