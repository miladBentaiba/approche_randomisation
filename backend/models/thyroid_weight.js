var mongoose = require('mongoose');
var ThyroidWeightSchema = new mongoose.Schema({
    T3: Number,
    Thyro: Number,
    Trido: Number,
    TSH: Number,
    TS: Number,
    by:String,
}, { collection: 'thyroid_weight' });
// on every save, add the date
ThyroidWeightSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();
    next();
});
var ThyroidWeight = mongoose.model('ThyroidWeight', ThyroidWeightSchema);
/** export schema */
module.exports = {
    ThyroidWeight: ThyroidWeight
};


