const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: Array,
    },
    step: {
        type: Array
    },
    bgColor: {
        type: String
    }
})

module.exports = mongoose.model('projects', projectsSchema);