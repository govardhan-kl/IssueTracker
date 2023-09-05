const express = require('express');
const router = express.Router();
const addProject_controller = require('../controllers/addProject_controller');


router.get('/',addProject_controller.addProject)
router.post('/create',addProject_controller.create);


module.exports = router