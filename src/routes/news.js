const express = require('express');
const router = express.Router();
const newcontroler = require('../app/controllers/Newscontrollers');

router.use('/:slug', newcontroler.show);
router.use('/', newcontroler.index);

module.exports = router;
