var mongoose = require('mongoose');
var Parameters = require('../models/parameters').Parameters;

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
    console.log(JSON.stringify(req.query));
    Parameters.findOne({},function(err, dbs) {
        res.send(dbs);
    });
};

/** updateCaseCancer function to get CaseCancer by id. */
exports.update = function (req, res) {
    // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.dbId.
// Find the existing resource by ID
    Parameters.findOneAndUpdate(req.body._id, req.body, function (err, db) {
        // Handle any possible CaseCancer errors
        if (err)
            res.send(err);
        res.json(db);
    });
}

exports.create = function (req, res) {
    console.log( req.body);
    var parameters =new Parameters({
            "nb_niveaux":req.body.nb_niveaux,
            "taille":req.body.taille,
            "nb_used_niveaux":req.body.nb_used_niveaux,
            "seuil":req.body.seuil,
            "coherence":req.body.coherence,
            "stochastique":req.body.stochastique,
            "regles":req.body.regles
    });
    parameters.save(function (err, insertedItem) {
        if (err) {
            console.log(err);
            res.send({
                message: 'something went wrong'
            });
        } else {
            console.log(insertedItem._id);
            res.send({
                message: 'the parameters has been saved'
            });
        }
        // saved!
    })};