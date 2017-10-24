var mongoose = require('mongoose');
var CaseCancer = require('../models/case_cancer').CaseCancer;
var RHSCancer = require('../models/RHS_cancer').RHSCancer;

/** create function to create CaseCancer */
exports.create = function (req, res) {
    console.log( req.body);
    var caseCancer =new CaseCancer({
        "problem.BI": req.body.problem.BI,
        "problem.age": req.body.problem.age,
        "problem.shape": req.body.problem.shape,
        "problem.margin": req.body.problem.margin,
        "problem.dencity": req.body.problem.dencity,
        "solution":req.body.solution,
        "validity.coherence":req.body.validity.coherence,
        "validity.stochastique":req.body.validity.stochastique,
        "validity.regles":req.body.validity.regles,
        "validity.expert":req.body.validity.expert,
        "nb_occurence":req.body.validity.expert,
        "by":req.body.by,
        "date_maj":req.body.date_maj ,
        "date_save":req.body.date_save
    });
    caseCancer.save(function (err, insertedItem) {
if (err) {
      console.log(err);
      res.send({
        message: 'something went wrong'
      });
    } else {
    console.log(insertedItem._id);
      res.send({
        message: 'the CaseCancer has been saved'
      });
    }
  // saved!
})};
/******************/
exports.getAll = function (req, res) {
    CaseCancer.find({}, function(err, dbs) {
       var dbMap = [];
    dbs.forEach(function(db) {
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