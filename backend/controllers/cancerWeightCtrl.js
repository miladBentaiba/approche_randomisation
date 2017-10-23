var mongoose = require('mongoose');
var CancerWeight = require('../models/cancer_weight').CancerWeight;
/** create function to create CaseWeight */

/******************/
exports.getAll = function (req, res) {
    CancerWeight.findOne({}, function(err, dbs) {
        var dbMap = dbs;
        res.send(dbMap);
  });
};