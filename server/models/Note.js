const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;