var mongoose = require('mongoose');
var RHSThyroid = require('../models/RHS_thyroid').RHSThyroid;
/** create function to create CaseCancer */
exports.create = function (req, res) {
    console.log( req.body);
    var rHSThyroid =new RHSThyroid({
        "delegue": req.body.delegue,
        "cases": req.body.cases
    });
    rHSThyroid.save(function (err) {
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
    RHSThyroid.find({}, function(err, dbs) {
        var dbMap = [];
        dbs.forEach(function(db) {
            dbMap.push( db);
        });
        res.send(dbMap);
    });
};

/** getCaseCancer function to get CaseCancer by id. */
exports.get = function (req, res) {
    RHSThyroid.findById(req.params._id, function(err, db) {
        if (err)
            res.send(err);
        res.json(db);
    });
};

/** updateCaseCancer function to get CaseCancer by id. */
exports.update = function (req, res) {
    // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.dbId.
// Find the existing resource by ID
    RHSThyroid.findOneAndUpdate(req.params._id, req.body, function (err, db) {
        // Handle any possible CaseCancer errors
        if (err)
            res.send(err);
        res.json(db);
    });
}
/** removeCaseCancer function to get CaseCancer by id. */
exports.delete = function (req, res) {
    RHSThyroid.findOneAndRemove(req.params._id, function(err, result) {
        if(err) { throw err; }
        res.send(result);
    });
}

//db.RHS_cancer.update({delegue: 1},{$push:{'cases':{'_id':ObjectId("59e249d7b5ed4c35fd36c766")} }})
