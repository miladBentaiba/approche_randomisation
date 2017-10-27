var mongoose = require('mongoose');
var RuleCancer = require('../models/rule_cancer').RuleCancer;
/** create function to create CaseCancer */
exports.create = function (req, res) {
    var ruleCancer =new RuleCancer({
        "regle": req.body.regle,
        "confiance": req.body.confiance,
        "generalite": req.body.generalite,
        "date_maj": req.body.date_maj,
        "by":req.body.by,
        "date_save":req.body.date_save
    });
    ruleCancer.save(function (err) {
        if (err) {
            console.log(err);
            res.send({
                message: 'something went wrong'
            });
        } else {
            res.send({
                message: 'the RuleCancer has been saved'
            });
        }
    })
};
/******************/
exports.getAll = function (req, res) {
    RuleCancer.find({}, function(err, dbs) {
        var dbMap = [];
        dbs.forEach(function(db) {
            dbMap.push( db);
        });
        res.send(dbMap);
    });
};

/** getCaseCancer function to get CaseCancer by id. */
exports.get = function (req, res) {
    RuleCancer.findById(req.params._id, function(err, db) {
        if (err)
            res.send(err);
        res.json(db);
    });
};

/** updateCaseCancer function to get CaseCancer by id. */
exports.update = function (req, res) {
    // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.dbId.
// Find the existing resource by ID
    RuleCancer.findOneAndUpdate(req.params._id, req.body, function (err, db) {
        // Handle any possible CaseCancer errors
        if (err)
            res.send(err);
        res.json(db);
    });
}
/** removeCaseCancer function to get CaseCancer by id. */
exports.delete = function (req, res) {
    RuleCancer.findOneAndRemove(req.params._id, function(err, result) {
        if(err) { throw err; }
        res.send(result);
    });
}