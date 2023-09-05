const express = require('express');
const router = express.Router();
const view_project = require('../controllers/view-project-details')


router.get('/:id',view_project.view_details);
router.post('/filter/:id',view_project.filter);
router.get('/filter/:id',view_project.view_details)

module.exports = router