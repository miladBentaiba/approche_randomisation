var mongoose = require('mongoose');
var Passenger = mongoose.model('CaseThyroid');

var RHSThyroidSchema = new mongoose.Schema({
    delegue:Number,
    cases: [Passenger.schema]
}, { collection: 'RHS_thyroid' });
// on every save, add the date
RHSThyroidSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();
    next();
});
var RHSThyroid = mongoose.model('RHSThyroid', RHSThyroidSchema);
/** export schema */
module.exports = {
    RHSThyroid: RHSThyroid
};