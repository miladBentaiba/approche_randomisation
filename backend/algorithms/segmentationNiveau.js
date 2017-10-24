var mongoose = require('mongoose');
var CaseCancer = require('../models/case_cancer').CaseCancer;
var CaseThyroid = require('../models/case_thyroid').CaseThyroid;
var Niveau = require('../models/niveau').Niveau;

mongoose.connect('mongodb://localhost/mydb');

var cases = [];

CaseThyroid.find({}, function(err, dbs) {
    dbs.forEach(function(db) {
        cases.push( db);
    });
    var i;
    console.log("length:"+cases.length);
    for (i=0;i<cases.length;i++)
    {
        //chercher niveau
        var cas = cases[i];
        console.log(cas);
        Niveau.findOneAndUpdate({"debut":1}, {$push: {"case_thyroid": {
                "solution":cas.solution,
                "nb_occurence":cas.nb_occurence,
                "by":cas.by,
                "date_maj":cas.date_maj,
                "date_save":cas.date_save,
                "validity":{
                    "coherence":cas.validity.coherence,
                    "stochastique":cas.validity.stochastique,
                    "regles":cas.validity.regles,
                    "expert":cas.validity.expert
                },
                "problem":{
                    "T3": cas.problem.T3,
                    "Thyro":cas.problem.Thyro,
                    "Trido":cas.problem.Trido,
                    "TSH":cas.problem.TSH,
                    "TS":cas.problem.TS
                }
            }
            }},{safe: true, upsert: true},
            function(err, model) {
                console.log(err);
                console.log(model);

            }
        );
    }
});


/*CaseCancer.find({}, function(err, dbs) {
    dbs.forEach(function(db) {
        cases.push( db);
    });
    var i;
    console.log("length:"+cases.length);
    for (i=0;i<cases.length;i++)
    {
        //chercher niveau
        var cas = cases[i];
        console.log(cas);
        Niveau.findOneAndUpdate({"debut":1}, {$push: {"case_cancer": {
                "solution":cas.solution,
                "nb_occurence":cas.nb_occurence,
                "by":cas.by,
                "date_maj":cas.date_maj,
                "date_save":cas.date_save,
                "validity":{
                    "coherence":cas.validity.coherence,
                    "stochastique":cas.validity.stochastique,
                    "regles":cas.validity.regles,
                    "expert":cas.validity.expert
                },
                "problem":{
                    "BI": cas.problem.BI,
                    "age":cas.problem.age,
                    "shape":cas.problem.shape,
                    "margin":cas.problem.margin,
                    "dencity":cas.problem.dencity
                }
            }
            }},{safe: true, upsert: true},
            function(err, model) {
                console.log(err);
                console.log(model);

            }
        );
    }
});*/
