const express = require('express');
const router = express.Router();
const create_issues = require('../controllers/create-issue')


router.get('/:id',create_issues.create_issue);
router.post('/create/bug',create_issues.create_Bug)

module.exports = router