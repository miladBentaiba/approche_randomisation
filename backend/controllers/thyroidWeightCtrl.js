var mongoose = require('mongoose');
var ThyroidWeight = require('../models/thyroid_weight').ThyroidWeight;
/** create function to create CaseWeight */

exports.getAll = function (req, res) {
    ThyroidWeight.findOne({}, function(err, dbs) {
        var dbMap = dbs;
        res.send(dbMap);
    });
};