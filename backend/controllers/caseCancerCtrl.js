var mongoose = require('mongoose');
var CaseCancer = require('../models/case_cancer').CaseCancer;
/** create function to create CaseCancer */
exports.create = function (req, res) {
    console.log( req.body.problem);
    var caseCancer =new CaseCancer({problem: req.body.problem});
    caseCancer.save(function (err) {
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
    console.log("I AM IN");
   CaseCancer.find({}, function(err, dbs) {
       var dbMap = [];
    dbs.forEach(function(db) {
        console.log("I AM IN here");
        dbMap.push( db);
    });
    res.send(dbMap);  
  });
};

/** getCaseCancer function to get CaseCancer by id. */
exports.get = function (req, res) {
     CaseCancer.findById(req.params._id, function(err, db) {
            if (err)
                res.send(err);
            res.json(db);
        });
};

/** updateCaseCancer function to get CaseCancer by id. */
exports.update = function (req, res) {
   // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.dbId.
// Find the existing resource by ID
CaseCancer.findOneAndUpdate(req.params._id, req.body, function (err, db) {  
    // Handle any possible CaseCancer errors
      if (err)
                res.send(err);
            res.json(db);
   });
}
/** removeCaseCancer function to get CaseCancer by id. */
exports.delete = function (req, res) {
  CaseCancer.findOneAndRemove(req.params._id, function(err, result) {
    if(err) { throw err; }
    res.send(result);  
  });
}