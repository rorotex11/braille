const mongoose = require('mongoose');

// Definición del esquema de Braille
const brailleSchema = new mongoose.Schema({
    character: {
        type: String,
        required: true,
        unique: true
    },
    braille_representation: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['letter', 'number', 'punctuation', 'accented_vowel'],
        required: true
    }
});

// Método para mostrar datos
brailleSchema.methods.showData = function() {
    return {
        character: this.character,
        braille_representation: this.braille_representation,
        type: this.type
    };
};

// Creación del modelo Braille
const Braille = mongoose.model('Braille', brailleSchema);

module.exports = Braille;
