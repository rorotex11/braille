const express = require('express');
const router = express.Router();
const braillecontroller = require('../contollers/braille-controller');

router.get('/', braillecontroller.getAllbraille);

module.exports = router;