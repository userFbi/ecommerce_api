const express = require('express');

const router = express.Router();

const PC = require('../controller/product');

router.post('/createProduct', PC.createProduct);
router.get('/viewProduct', PC.viewProduct);
router.delete('/deleteProduct/:id', PC.deleteProduct);
router.patch('/updateProduct/:id', PC.updateProdcut);

module.exports = router;