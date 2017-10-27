var mongoose = require('mongoose');
var RuleThyroid = require('../models/rule_thyroid').RuleThyroid;
/** create function to create CaseCancer */
exports.create = function (req, res) {
    var ruleThyroid =new RuleThyroid({
        "regle": req.body.regle,
        "confiance": req.body.confiance,
        "generalite": req.body.generalite,
        "date_maj": req.body.date_maj,
        "by":req.body.by,
        "date_save":req.body.date_save
    });
    ruleThyroid.save(function (err) {
        if (err) {
            console.log(err);
            res.send({
                message: 'something went wrong'
            });
        } else {
            res.send({
                message: 'the RuleThyroid has been saved'
            });
        }
    })
};
/******************/
exports.getAll = function (req, res) {
    RuleThyroid.find({}, function(err, dbs) {
        var dbMap = [];
        dbs.forEach(function(db) {
            dbMap.push( db);
        });
        res.send(dbMap);
    });
};

/** getCaseCancer function to get CaseCancer by id. */
exports.get = function (req, res) {
    RuleThyroid.findById(req.params._id, function(err, db) {
        if (err)
            res.send(err);
        res.json(db);
    });
};

/** updateCaseCancer function to get CaseCancer by id. */
exports.update = function (req, res) {
    // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.dbId.
// Find the existing resource by ID
    RuleThyroid.findOneAndUpdate(req.params._id, req.body, function (err, db) {
        // Handle any possible CaseCancer errors
        if (err)
            res.send(err);
        res.json(db);
    });
}
/** removeCaseCancer function to get CaseCancer by id. */
exports.delete = function (req, res) {
    RuleThyroid.findOneAndRemove(req.params._id, function(err, result) {
        if(err) { throw err; }
        res.send(result);
    });
}