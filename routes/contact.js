const contactController = require('../controllers/contact');
const express = require('express');

const router = express.Router();

router.get('/', contactController.getContact);
router.post('/', contactController.postContact);

module.exports = router;
