/* eslint no-underscore-dangle: 0 */
const fs = require('fs');
const mongoose = require('mongoose');




// require('../models/case_cancer');

const { CaseCancer } = require('../models/case_cancer');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/pandora', { useMongoClient: true });
console.log('dfjnfdjkbnfdb');

CaseCancer.findOne({}, function (err, result) {
    console.log('dfjnfdjkbnfdb');
    if (err) { console.log('err'); } else if (result) {
        console.log('result');
    } else {
        console.log('nothing');
    }
});


/*const prom = obj => new Promise((resolve, reject) => {
  SolCancer.findOne({ severity: obj.severity }, (error, db) => {
    console.log('ppppppppppppp');
    if (error) {
      console.log('errrrrrrrrrr');
      reject(error);
    } else if (db == null) reject('1');
    else resolve(db);
  });
});

// reading the file that contains all the data
fs.readFile(`${__dirname}/../data.txt`, 'utf8', (err, data) => {
  if (err) console.log('error reading file');
  // parse the read string into jsonArray
  const jsondata = JSON.parse(data);

  // for each object, look for the solSegment
  jsondata.forEach((obj) => {
    prom(obj)
      .then((db) => {
        // the segment is found, insert the case in the segment
        console.log('result: ');
        db.cases.push(obj);
        const sCancer = new SolCancer(db);
        sCancer.findOneAndUpdate(db._id, db, (er, dbres) => {
          if (er) console.log(er);
          // console.log(dbres);
        });
      })
      .catch((valeur) => {
        console.log('not another error');
        if (valeur === '1') {
          console.log('not another error');
          // Create new segment that represent the solution
          const sCancer = new SolCancer({
            severity: obj.severity,
            cases: () => {
              const aObj = [];
              aObj.push(obj);
              return aObj;
            },
          });
          sCancer.save((errr) => {
            if (errr) console.log(errr);
            else console.log(obj.severity, 'saved');
          });
        } else console.log('another error', valeur);
      });
  });
});*/

mongoose.connection.close();
