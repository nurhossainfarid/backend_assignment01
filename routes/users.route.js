const express = require('express');
const router = express.Router();
const controllerUsers = require('../controller/users.controller');

router.route('/:random').get(controllerUsers.getRandomUser);
router.route('/:all').get(controllerUsers.getAllUsers);
router.route('/:save').post(controllerUsers.saveUser);
router.route('/:update/:id').patch(controllerUsers.updateUser);
router.route('/:delete/:id').delete(controllerUsers.deleteUser);

module.exports = router;

