var mongoose = require('mongoose');
var WeightCancer = require('../models/weight_cancer').WeightCancer;
/** create function to create CaseWeight */

/******************/
exports.getAll = function (req, res) {
    WeightCancer.find({}, function(err, dbs) {
        var dbMap = [];
        dbs.forEach(function(db) {
            dbMap.push( db);
        });
        res.send(dbMap);
    });
};

exports.create = function (req, res) {
    console.log( req.body);
    var weightCancer =new WeightCancer({
        "weight":req.body.weight,
        "attrib":req.body.attrib
    });
    weightCancer.save(function (err) {
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
