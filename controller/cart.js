const CART = require('../model/cart');

exports.createCart = async (req, res) => {
    try {
        const data = req.body;
        const allData = await CART.create(data);

        res.status(201).json({
            status: 'Success',
            message: 'Cart created successfully',
            data: allData
        });

    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
}
exports.viewCart = async (req, res) => {
    try {
        const allData = await CART.find();
        res.status(201).json({
            status: 'Success',
            message: 'Cart viewed successfully',
            data: allData
        });

    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
}
exports.deleteCart = async (req, res) => {
    try {
        const deleteId = req.params.id;
        const allData = await CART.findByIdAndDelete(deleteId);

        res.status(201).json({
            status: 'Success',
            message: 'Cart deleted successfully',
            data: allData
        });

    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
}
exports.updateCart = async (req, res) => {
    try {
        const updateId = req.params.id;
        const data = req.body;
        const allData = await CART.findByIdAndUpdate(updateId, data, { new: true });

        res.status(201).json({
            status: 'Success',
            message: 'Cart updated successfully',
            data: allData
        });

    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
}