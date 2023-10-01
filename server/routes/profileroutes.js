const express = require('express');
const router = express.Router();
const { createProfile } = require('../controller/profilecontroller')

router.post('/postprofile', createProfile);

module.exports = router;
