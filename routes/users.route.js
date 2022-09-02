const express = require('express');
const router = express.Router();
const controllerUsers = require('../controller/users.controller');

router.route('/:all').get(controllerUsers.getAllUsers);

module.exports = router;

