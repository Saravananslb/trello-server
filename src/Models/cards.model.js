const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    cardId: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    stepId: {
        type: String
    },
    order: {
        type: Number
    },
    field: {
        type: Array
    }
})

module.exports = mongoose.model('cards', cardSchema);