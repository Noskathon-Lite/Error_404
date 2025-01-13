const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
    emoji: {type: String},
    label: {type: String},
    value: {type: Number, min: 1, max: 5 },
    suggestions: [
        {
            type: String,
        }
    ]
    });

module.exports = mongoose.model('Mood', moodSchema);