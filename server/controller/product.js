const PRODUCT = require('../model/product');

exports.createProduct = async (req, res) => {
    try {
        const data = req.body;
        const createProduct = await PRODUCT.create(data);

        res.status(201).json({
            status: 'Success',
            message: 'Prodcut created successfully',
            data: createProduct
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
}

exports.viewProduct = async (req, res) => {
    try {

        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 8;

        const min = Number(req.query.min) || 0;
        const max = Number(req.query.max) || 999999;

        const search = req.query.search || "";

        const skip = (page - 1) * limit;

        const filter = {

            productPrice: {
                $gte: min,
                $lte: max
            },

            productName: {
                $regex: search,
                $options: "i"
            }

        };

        const totalProducts = await PRODUCT.countDocuments(filter);

        const viewProduct = await PRODUCT.find(filter)
            .skip(skip)
            .limit(limit);

        res.status(200).json({
            status: "Success",
            message: "Products viewed successfully",
            totalProducts,
            totalPages: Math.ceil(totalProducts / limit),
            currentPage: page,
            data: viewProduct
        });

    } catch (error) {

        res.status(400).json({
            status: "Fail",
            message: error.message
        });

    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const deleteId = req.params.id;
        const deleteProduct = await PRODUCT.findByIdAndDelete(deleteId);

        res.status(201).json({
            status: 'Success',
            message: 'Prodcut deleted successfully',
            data: deleteProduct
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
}

exports.updateProdcut = async (req, res) => {
    try {
        const updateId = req.params.id;
        const data = req.body;
        const updateProduct = await PRODUCT.findByIdAndUpdate(updateId, data, { new: true });

        res.status(201).json({
            status: 'Success',
            message: 'Prodcut updated successfully',
            data: updateProduct
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
}
