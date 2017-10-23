var mongoose = require('mongoose');
var Passenger = mongoose.model('CaseThyroid');

var LHSThyroidSchema = new mongoose.Schema({
    delegue: {
        T3:Number,
        thyro: Number,
        trido: Number,
        TSH: Number,
        TS: Number,
    },
    cases: [Passenger.schema]
}, { collection: 'LHS_thyroid' });
// on every save, add the date
LHSThyroidSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();
    next();
});
var LHSThyroid = mongoose.model('LHSThyroid', LHSThyroidSchema);
/** export schema */
module.exports = {
    LHSThyroid: LHSThyroid
};