const express = require('express');
const router = express.Router();
const sitecontroler = require('../app/controllers/Sitecontrollers');

router.use('/search', sitecontroler.search);
router.use('/', sitecontroler.index);

module.exports = router;
