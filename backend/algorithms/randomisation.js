var mongoose = require('mongoose');
var CaseCancer = require('../models/case_cancer').CaseCancer;
var CaseThyroid = require('../models/case_thyroid').CaseThyroid;
var CancerWeight = require('../models/cancer_weight').CancerWeight;
var ThyroidWeight = require('../models/thyroid_weight').ThyroidWeight;


/*//substitution simple selon le poid des attributs et le nombre d'attributs à substituer
function randomiserCancer(case1, case2, nbSubstitus){
    exports.getAll = function (req, res) {
        CancerWeight.findOne({}, function(err, dbs) {
            var cancerWeights= dbs;
            var BIw= cancerWeights.BI;
            var agew = cancerWeights.age;
            var shapew = cancerWeights.shape;
            var dencityw = cancerWeights.dencity;
            var marginw = cancerWeights.margin;

            high
        });
    };
}*/





