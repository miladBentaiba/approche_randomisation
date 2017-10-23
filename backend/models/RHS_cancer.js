var mongoose = require('mongoose');
var Passenger = mongoose.model('CaseCancer');

var RHSCancerSchema = new mongoose.Schema({
    delegue:Number,
    cases: [Passenger.schema]
}, { collection: 'RHS_cancer' });
// on every save, add the date
RHSCancerSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();
    next();
});
var RHSCancer = mongoose.model('RHSCancer', RHSCancerSchema);
/** export schema */
module.exports = {
    ThyroidWeight: RHSCancer
};