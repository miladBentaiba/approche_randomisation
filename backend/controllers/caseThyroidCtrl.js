var mongoose = require('mongoose');
var CaseThyroid = require('../models/case_thyroid').CaseThyroid;
/** create function to create CaseCancer */
exports.create = function (req, res) {
    var caseThyroid =new CaseThyroid({
        "problem.T3": req.body.problem.T3,
        "problem.Thyro": req.body.problem.Thyro,
        "problem.Trido": req.body.problem.Trido,
        "problem.TSH": req.body.problem.TSH,
        "problem.TS": req.body.problem.TS,
        "solution":req.body.solution,
        "validity.coherence":req.body.validity.coherence,
        "validity.stochastique":req.body.validity.stochastique,
        "validity.regles":req.body.validity.regles,
        "validity.expert":req.body.validity.expert,
        "nb_occurence":req.body.nb_occurence,
        "by":req.body.by,
        "date_maj":req.body.date_maj ,
        "date_save":req.body.date_save
    });
    caseThyroid.save(function (err) {
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
    })
};
/******************/
exports.getAll = function (req, res) {
    CaseThyroid.find({}, function(err, dbs) {
        var dbMap = [];
        dbs.forEach(function(db) {
            dbMap.push( db);
        });
        res.send(dbMap);
    });
};

/** getCaseCancer function to get CaseCancer by id. */
exports.get = function (req, res) {
    CaseThyroid.findById(req.params._id, function(err, db) {
        if (err)
            res.send(err);
        res.json(db);
    });
};

/** updateCaseCancer function to get CaseCancer by id. */
exports.update = function (req, res) {
    // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.dbId.
// Find the existing resource by ID
    CaseThyroid.findOneAndUpdate(req.params._id, req.body, function (err, db) {
        // Handle any possible CaseCancer errors
        if (err)
            res.send(err);
        res.json(db);
    });
}
/** removeCaseCancer function to get CaseCancer by id. */
exports.delete = function (req, res) {
    CaseThyroid.findOneAndRemove(req.params._id, function(err, result) {
        if(err) { throw err; }
        res.send(result);
    });
}