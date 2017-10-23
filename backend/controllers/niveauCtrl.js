var mongoose = require('mongoose');
var Niveau = require('../models/niveau').Niveau;
/** create function to create CaseCancer */
exports.create = function (req, res) {
    console.log( req.body);
    var niveau =new Niveau({
        "rang": req.body.rang,
        "debut": req.body.debut,
        "fin": req.body.fin,
        "case_cancer": req.body.case_cancer,
        "case_thyroid": req.body.case_thyroid
    });
    niveau.save(function (err) {
        if (err) {
            console.log(err);
            res.send({
                message: 'something went wrong'
            });
        } else {
            res.send({
                message: 'the niveau has been saved'
            });
        }
        // saved!
    })};
/******************/
exports.getAll = function (req, res) {
    Niveau.find({}, function(err, dbs) {
        var dbMap = [];
        dbs.forEach(function(db) {
            dbMap.push( db);
        });
        res.send(dbMap);
    });
};

/** getCaseCancer function to get CaseCancer by id. */
exports.get = function (req, res) {
    Niveau.findById(req.params._id, function(err, db) {
        if (err)
            res.send(err);
        res.json(db);
    });
};

/** updateCaseCancer function to get CaseCancer by id. */
exports.update = function (req, res) {
    // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.dbId.
// Find the existing resource by ID
    Niveau.findOneAndUpdate(req.params._id, req.body, function (err, db) {
        // Handle any possible CaseCancer errors
        if (err)
            res.send(err);
        res.json(db);
    });
}
/** removeCaseCancer function to get CaseCancer by id. */
exports.delete = function (req, res) {
    Niveau.findOneAndRemove(req.params._id, function(err, result) {
        if(err) { throw err; }
        res.send(result);
    });
}