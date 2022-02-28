let mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let Schema = mongoose.Schema;

let MeetingSchema = Schema({
    id: Number,
    start: Date,
    end: Date,
    id_room: Number,
    description: String,
    
   
});

// Pour activer le plugin
MeetingSchema.plugin(aggregatePaginate);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Meeting', MeetingSchema);