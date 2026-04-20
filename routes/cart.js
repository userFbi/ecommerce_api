const express = require('express');

const router = express.Router();

const CC = require('../controller/cart');

router.post('/createCart', CC.createCart);
router.get('/viewCart', CC.viewCart);
router.delete('/deleteCart/:id', CC.deleteCart);
router.put('/updateCart/:id', CC.updateCart);

module.exports = router;