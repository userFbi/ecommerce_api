const express = require('express');

const router = express.Router();

const UC = require('../controller/user');

router.post('/createUser', UC.createUser);
router.get('/viewUser', UC.viewUser);
router.delete('/deleteUser/:id', UC.deleteUser);
router.patch('/updateUser/:id', UC.updateUser);

module.exports = router;