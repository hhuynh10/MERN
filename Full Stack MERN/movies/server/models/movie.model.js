const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minLength: [3, "Title must be at least 3 character long"]
    },
    year: {
        type: Number,
        required: [true, "Year is required!"],
        min: [2000, "Must be after 2000s"]
    },
    rating: {
        type: String,
        enum: {
            values: ['G', 'PG', 'PG-13', 'R'],
            message: 'Please select a rating!'
        }
            
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minLength: [3, "Description must be at least 3 character long"]
    },
    boxArt: {
        type: String,
        required: [true, "Image is required!"],
    }

}, {timestamp:true});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;