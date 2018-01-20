const mongoose = require('mongoose');
const { CaseCancer } = require('../models/case_cancer');
const { WeightCancer } = require('../models/weight_cancer');

mongoose.connect('mongodb://localhost/pandora');

// un code pour tester
const q = CaseCancer.find({}).limit(2);
q.exec((err, res) => {
  const cases = [];
  res.forEach((db) => {
    cases.push(db);
  });
  const case1 = cases[0];
  const case2 = cases[1];
  console.log('case1');
  console.log(JSON.stringify(case1.problem));
  console.log('case2');
  console.log(JSON.stringify(case2.problem));
  // const obj = randomiserCancer(case1, case2, 2);
  console.log('result');
  console.log(JSON.stringify(obj.problem));
});


// substitution simple selon le poid des attributs et le nombre d'attributs à substituer
function randomiserCancer(case1, case2, nbSubstitus) {
  const weights = [];
  WeightCancer.find({}, (err, dbs) => {
    dbs.forEach((db) => {
      weights.push(db);
    });
    weights.sort(compare);
    let j;
    for (j = 0; j < nbSubstitus; j++) {
      switch (weights[j].attrib) {
        case 'BI': {
          case1.BI = case2.BI;
          break;
        }
        case 'age': {
          console.log('2');
          case1.age = case2.age;
          break;
        }
        case 'shape': {
          console.log('3');
          case1.shape = case2.shape;
          break;
        }
        case 'margin': {
          console.log('4');
          case1.margin = case2.margin;
          break;
        }
        case 'dencity': {
          console.log('5');
          case1.dencity = case2.dencity;
          break;
        }
      }
    }
  });

  return case1;
}

function compare(a, b) {
  if (a.weight > b.weight) { return -1; }
  if (a.weight < b.weight) { return 1; }
  return 0;
}

