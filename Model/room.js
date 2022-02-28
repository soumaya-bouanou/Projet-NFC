let mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let Schema = mongoose.Schema;

let RoomSchema = Schema({
    id: Number,
    num: String,
    material: String,
    capacity: Number,
   
});

// Pour activer le plugin
RoomSchema.plugin(aggregatePaginate);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Room', RoomSchema);