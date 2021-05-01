const schema_mongoose = require('mongoose');

const InstrumentSchema = schema_mongoose.Schema(
    {
    insname: { type: String },
    insno: {type: String}
    }, 
    {
       timestamps: true
    }
    );

module.exports = schema_mongoose.model('ins_collection', InstrumentSchema);