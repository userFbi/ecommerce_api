const ORDER = require('../model/order');

exports.createOrder = async (req, res) => {
    try {
        const data = req.body;
        const allData = await ORDER.create(data);

        res.status(201).json({
            status: 'Success',
            message: 'Order created successfully',
            data: allData
        });

    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
}

exports.viewOrder = async (req, res) => {
    try {
        const viewData = await ORDER.find();
        res.status(200).json({
            status: 'Success',
            results: viewData.length,
            data: viewData
        });
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            message: error.message
        });
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        const deleteId = req.params.id;
        const deleteData = await ORDER.findByIdAndDelete(deleteId);
        res.status(200).json({
            status: 'Success',
            message: 'Order deleted successfully',
            data: deleteData
        });
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            message: error.message
        });
    }
}

exports.updateOrder = async (req, res) => {
    try {
        const updateId = req.params.id;
        const updateData = req.body;
        const updatedOrder = await ORDER.findByIdAndUpdate(updateId, updateData, { new: true });
        res.status(200).json({
            status: 'Success',
            message: 'Order updated successfully',
            data: updatedOrder
        });
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            message: error.message
        });
    }
}