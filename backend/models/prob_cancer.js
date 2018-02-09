const mongoose = require('mongoose');

const CaseCancer = mongoose.model('CaseCancer');

const LHSCancerSchema = new mongoose.Schema({
  delegue: {
    BI: {
      un: Number,
      deux: Number,
      trois: Number,
      quatre: Number,
      cinq: Number,
    },
    age: Number,
    shape: {
      round: Number,
      oval: Number,
      lobular: Number,
      irregular: Number,
    },
    margin: {
      circumscribed: Number,
      microlobulated: Number,
      obscured: Number,
      ill_defined: Number,
      spiculated: Number,
    },
    dencity: {
      high: Number,
      iso: Number,
      low: Number,
      fat_containing: Number,
    },
  },
  cases: [CaseCancer.schema],
}, { collection: 'LHS_cancer' });

const LHSCancer = mongoose.model('LHSCancer', LHSCancerSchema);

module.exports = { LHSCancer };
