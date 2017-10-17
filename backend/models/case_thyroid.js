var mongoose = require('mongoose');
var CaseThyroidSchema = new mongoose.Schema({
    problem:{
        T3: Number,
        thyro: Number,
        trido: Number,
        TSH: Number,
        TS: Number,
    },
    solution:Number,
    validity:{
        coherence:Boolean,
        stochastique:Number,
        regles:Boolean,
        expert:Boolean
    },

    nb_occurence:Number,
    by:String,
    date_maj: { type: Date, default: Date.now },
    date_save: { type: Date, default: Date.now }
}, { collection: 'case_thyroid' });


CaseThyroidSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.date_maj = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.date_maj)
        this.date_maj = currentDate;

    next();
});
var CaseThyroid = mongoose.model('CaseThyroid', CaseThyroidSchema);
/** export schema */
module.exports = {
    CaseThyroid: CaseThyroid
};


