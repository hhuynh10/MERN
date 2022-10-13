const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        unique: true,
        minLength: [3, "Name must be at least 3 character long."]
    },
    type: {
        type: String,
        required: [true, "Type is required."],
        minLength: [3, "Type must be at least 3 character long."]
    },
    description: {
        type: String,
        required: [true, "Description is required."],
        minLength: [3, "Description must be at least 3 character long."]
    },
    skillOne: {
        type: String,
    },
    skillTwo: {
        type: String,
    },
    skillThree: {
        type: String,
    },
}, {timestamp:true});

const Pet = mongoose.model('Pet', PetSchema);
PetSchema.plugin(uniqueValidator)

module.exports = Pet;