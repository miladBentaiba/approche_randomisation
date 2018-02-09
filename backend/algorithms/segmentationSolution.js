/* eslint no-underscore-dangle: 0 */
const fs = require('fs');
const mongoose = require('mongoose');
require('async');

mongoose.connect('mongodb://localhost/pandora');

require('../models/case_cancer');
const { SolCancer } = require('../models/sol_cancer');

// Redefine forEach to be able to work correctly with "await/async"
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    await callback(array[index], index, array);
  }
}

// Insert the object in the appropriate segment. if there is no segment create one
const waitFor = obj => new Promise((resolve, reject) => {
  console.log('obj', obj, parseInt(obj.severity, 10));

  // Look for the segment that have the same severity as obj
  SolCancer.findOneAndUpdate({ severity: obj.severity }, { $addToSet: { cases: obj } }, (error, solCancer) => {
    if (error) reject(error);
    console.log('solcancer');

    if (!solCancer) {
      // if no one found, create one, insert obj in the segment and save
      console.log('segment not found');
      const solCancerz = new SolCancer({
        severity: obj.severity,
        cases: [obj],
      });
      solCancerz.save();
    }
    resolve(obj);
  });
});

// reading the file that contains all the data
fs.readFile(`${__dirname}/../dataO.txt`, 'utf8', (err, data) => {
  if (err) console.log('error reading file');

  // parse the read string into jsonArray
  const jsondata = JSON.parse(data);

  // for each object in jsondata
  asyncForEach(jsondata, async (obj) => {
    await waitFor(obj);
  });
});

