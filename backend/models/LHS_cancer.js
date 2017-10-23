var mongoose = require('mongoose');
var Passenger = mongoose.model('CaseCancer');

var LHSCancerSchema = new mongoose.Schema({
    delegue:{
        BI:{
            un:Number,
            deux: Number,
            trois: Number,
            quatre: Number,
            cinq: Number
        },
        age: Number,
        shape:{
            round: Number,
            oval: Number,
            lobular: Number,
            irregular: Number
        },
        margin:{
            circumscribed: Number,
            microlobulated: Number,
            obscured: Number,
            ill_defined: Number,
            spiculated: Number
        },
        dencity: {
            high: Number,
            iso: Number,
            low: Number,
            fat_containing: Number
        }
    },
    cases: [Passenger.schema]
}, { collection: 'LHS_cancer' });
// on every save, add the date
LHSCancerSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();
    next();
});
var LHSCancer = mongoose.model('LHSCancer', LHSCancerSchema);
/** export schema */
module.exports = {
    ThyroidWeight: LHSCancer
};