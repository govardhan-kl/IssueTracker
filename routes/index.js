const express = require('express');
const router = express.Router();



router.use('/home',require('./home'))
router.use('/add-project',require('./add-project'));
router.use('/view-project-details',require('./view-project-details'));
router.use('/create-issue',require('./create-issue'));

module.exports = router
