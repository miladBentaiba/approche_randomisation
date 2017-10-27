var mongoose = require('mongoose');
var CaseCancer = require('../models/case_cancer').CaseCancer;
var CaseThyroid = require('../models/case_thyroid').CaseThyroid;
var WeightCancer = require('../models/weight_cancer').WeightCancer;
var WeightThyroid = require('../models/weight_thyroid').WeightThyroid;

mongoose.connect('mongodb://localhost/mydb');


//un code pour tester
var q = CaseCancer.find({}).limit(2);
q.exec(function(err, res)
{
    var cases =[];
    res.forEach(function(db) {
        cases.push( db);
    });
    var case1 = cases[0];
    var case2 = cases[1];
    console.log("case1");
    console.log(JSON.stringify(case1.problem));
    console.log("case2");
    console.log(JSON.stringify(case2.problem));
    var obj = randomiserCancer(case1,case2, 2);
    console.log("result");
    console.log(JSON.stringify(obj.problem));
});



//substitution simple selon le poid des attributs et le nombre d'attributs à substituer
function randomiserCancer(case1, case2, nbSubstitus){
    var weights =[];
    WeightCancer.find({}, function(err, dbs) {
        dbs.forEach(function(db) {
            weights.push( db);
        });
        weights.sort(compare);
        var j;
        for (j=0;j<nbSubstitus;j++){
            switch (weights[j].attrib){
                case "BI": {
                    console.log("1"+case1.BI+","+);
                    case1.BI = case2.BI;
                    break;
                }
                case "age":{
                    console.log("2");
                    case1.age = case2.age;
                    break;
                }
                case "shape":{
                    console.log("3");
                    case1.shape = case2.shape;
                    break;
                }
                case "margin": {
                    console.log("4");
                    case1.margin = case2.margin;
                    break;
                }
                case "dencity":{
                    console.log("5");
                    case1.dencity = case2.dencity;
                    break;
                }
            }
        }
    });

    return case1;
}

function compare(a,b) {
    if (a.weight > b.weight)
        return -1;
    if (a.weight < b.weight)
        return 1;
    return 0;
}






