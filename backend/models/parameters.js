var mongoose = require('mongoose');
var ParametersSchema = new mongoose.Schema({
    nb_niveaux:Number,
    taille:Number,
    nb_used_niveaux:Number,
    seuil:Number,
    coherence:Boolean,
    stochastique:Boolean,
    regles:Boolean,
    date_maj: { type: Date, default: Date.now },
        by:String
}, { collection: 'parameters' });
// on every save, add the date
ParametersSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.date_maj = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.date_maj)
        this.date_maj = currentDate;

    next();
});
var Parameters = mongoose.model('parameters', ParametersSchema);
/** export schema */
module.exports = {
    Parameters: Parameters
};


