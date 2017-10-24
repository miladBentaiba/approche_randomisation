var mongoose = require('mongoose');
var WeightThyroid = require('../models/weight_thyroid').WeightThyroid;
/** create function to create CaseWeight */

/******************/
exports.getAll = function (req, res) {
    WeightThyroid.find({}, function(err, dbs) {
        var dbMap = [];
        dbs.forEach(function(db) {
            dbMap.push( db);
        });
        res.send(dbMap);
    });
};

exports.create = function (req, res) {
    console.log( req.body);
    var weightThyroid =new WeightThyroid({
        "weight":req.body.weight,
        "attrib":req.body.attrib
    });
    weightThyroid.save(function (err) {
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
