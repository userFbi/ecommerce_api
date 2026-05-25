const express = require('express');

const router = express.Router();

const CARTCONTROLLER = require('../controller/categories');

router.post('/createCategories', CARTCONTROLLER.createCategories);
router.get('/viewCategories', CARTCONTROLLER.viewCategories);
router.delete('/deleteCategories/:id', CARTCONTROLLER.deleteCategories);
router.patch('/updateCategories/:id', CARTCONTROLLER.updateCategories);

module.exports = router;