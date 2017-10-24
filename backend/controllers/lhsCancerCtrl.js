var mongoose = require('mongoose');
var LHSCancer = require('../models/LHS_cancer').LHSCancer;
var RHSCancer = require('../models/RHS_cancer').RHSCancer;

/** create function to create CaseCancer */
exports.create = function (req, res) {
    console.log( req.body);
    var lHSCancer =new LHSCancer({
        "delegue.BI.un": req.body.delegue.BI.un,
        "delegue.BI.deux": req.body.delegue.BI.deux,
        "delegue.BI.trois": req.body.delegue.BI.trois,
        "delegue.BI.quatre": req.body.delegue.BI.quatre,
        "delegue.BI.cinq": req.body.delegue.BI.cinq,
        "delegue.age": req.body.delegue.age,
        "delegue.shape.round": req.body.delegue.shape.round,
        "delegue.shape.oval": req.body.delegue.shape.oval,
        "delegue.shape.lobular": req.body.delegue.shape.lobular,
        "delegue.shape.irregular": req.body.delegue.shape.irregular,
        "delegue.margin.circumscribed": req.body.delegue.margin.circumscribed,
        "delegue.margin.microlobulated": req.body.delegue.margin.microlobulated,
        "delegue.margin.obscured": req.body.delegue.margin.obscured,
        "delegue.margin.ill_defined": req.body.delegue.margin.ill_defined,
        "delegue.margin.spiculated": req.body.delegue.margin.spiculated,
        "delegue.dencity.high":  req.body.delegue.dencity.high,
        "delegue.dencity.iso":  req.body.delegue.dencity.iso,
        "delegue.dencity.low": req.body.delegue.dencity.low ,
        "delegue.dencity.fat_containing": req.body.delegue.dencity.fat_containing,
        "cases":req.body.cases
    });
    lHSCancer.save(function (err) {
        if (err) {
            console.log(err);
            res.send({
                message: 'something went wrong'
            });
        } else {
            res.send({
                message: 'the CaseCancer has been saved'
            });
        }
        // saved!
    })};
/******************/
exports.getAll = function (req, res) {
    LHSCancer.find({}, function(err, dbs) {
        var dbMap = [];
        dbs.forEach(function(db) {
            dbMap.push( db);
        });
        res.send(dbMap);
    });
};

/** getCaseCancer function to get CaseCancer by id. */
exports.get = function (req, res) {
    LHSCancer.findById(req.params._id, function(err, db) {
        if (err)
            res.send(err);
        res.json(db);
    });
};

/** updateCaseCancer function to get CaseCancer by id. */
exports.update = function (req, res) {
    // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.dbId.
// Find the existing resource by ID
    LHSCancer.findOneAndUpdate(req.params._id, req.body, function (err, db) {
        // Handle any possible CaseCancer errors
        if (err)
            res.send(err);
        res.json(db);
    });
}
/** removeCaseCancer function to get CaseCancer by id. */
exports.delete = function (req, res) {
    LHSCancer.findOneAndRemove(req.params._id, function(err, result) {
        if(err) { throw err; }
        res.send(result);
    });
}