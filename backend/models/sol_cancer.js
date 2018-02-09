const mongoose = require('mongoose');

const CaseCancer = mongoose.model('CaseCancer');

const RHSCancerSchema = new mongoose.Schema({
  delegue: Number,
  cases: [CaseCancer.schema],
}, { collection: 'RHS_cancer' });

const RHSCancer = mongoose.model('RHSCancer', RHSCancerSchema);

module.exports = { RHSCancer };
