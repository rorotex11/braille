const Braille = require('../models/Braille');

exports.getAllbraille = async (req, res) => {
    try {
      const braille = await Braille.find();
      res.json(braille
      ); // Aplicamos el método showData para cada término
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  