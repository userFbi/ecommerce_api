const express = require('express');

const router = express.Router();

const OC = require('../controller/order');

router.post('/createOrder', OC.createOrder);
router.get('/viewOrder', OC.viewOrder);
router.delete('/deleteOrder/:id', OC.deleteOrder);
router.patch('/updateOrder/:id', OC.updateOrder);

module.exports = router;