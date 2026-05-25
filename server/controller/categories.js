const CATEGORY = require('../model/categories');

exports.createCategories = async (req, res) => {
    try {
        const data = req.body;
        const allData = await CATEGORY.create(data);

        res.status(201).json({
            status: 'Success',
            message: 'Category created successfully',
            data: allData
        });

    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
}
exports.viewCategories = async (req, res) => {
    try {
        const allData = await CATEGORY.find();

        res.status(201).json({
            status: 'Success',
            message: 'Category viewed successfully',
            data: allData
        });

    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
}
exports.deleteCategories = async (req, res) => {
    try {
        const deleteId = req.params.id;
        const allData = await CATEGORY.findByIdAndDelete(deleteId, { new: true });

        res.status(201).json({
            status: 'Success',
            message: 'Category deleted successfully',
            data: allData
        });

    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
}
exports.updateCategories = async (req, res) => {
    try {
        const data = req.body;
        const updateId = req.params.id;
        const allData = await CATEGORY.findByIdAndUpdate(updateId, data, { new: true });

        res.status(201).json({
            status: 'Success',
            message: 'Category updated successfully',
            data: allData
        });

    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
}