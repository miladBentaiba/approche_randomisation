const mongoose = require('mongoose');
const { CaseCancer } = require('../models/case_cancer');
const { RHSCancer } = require('../models/RHS_cancer');

mongoose.connect('mongodb://localhost/mydb');


// insérer le cas dans case_cancer

const cases = [];

CaseCancer.find({}, (err, dbs) => {
  dbs.forEach((db) => {
    cases.push(db);
  });
  let i;
  console.log(`length:${cases.length}`);
  for (i = 0; i < cases.length; i++) {
    // chercher RHS
    const cas = cases[i];
    console.log(cas);
    RHSCancer.findOneAndUpdate(
      { delegue: cas.solution }, {
        $push: {
          cases: {
            solution: cas.solution,
            nb_occurence: cas.nb_occurence,
            by: cas.by,
            date_maj: cas.date_maj,
            date_save: cas.date_save,
            validity: {
              coherence: cas.validity.coherence,
              stochastique: cas.validity.stochastique,
              regles: cas.validity.regles,
              expert: cas.validity.expert,
            },
            problem: {
              BI: cas.problem.BI,
              age: cas.problem.age,
              shape: cas.problem.shape,
              margin: cas.problem.margin,
              dencity: cas.problem.dencity,
            },
          },
        },
      }, { safe: true, upsert: true },
      (model) => {
        console.log(err);
        console.log(model);
      },
    );

    // MAJ délégué
    // appliquer la randomisation en boucle
    // calculer la validité stochastique
  }
});

