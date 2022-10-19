const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        unique: true,
        minLength: [2, "Name must be at least 2 character long."]
    },
    position: {
        type: String,
        required: [true, "Position is required."],
        minLength: [2, "Position must be at least 2 character long."]
    }
}, {timestamp:true});

const Team = mongoose.model('Team', TeamSchema);
TeamSchema.plugin(uniqueValidator)

module.exports = Team;