const USER = require('../model/user');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const data = req.body;
        const allData = await USER.create(data);

        res.status(200).json({
            status: 'Success',
            message: 'User create success',
            data: allData,
        })
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.viewUser = async (req, res) => {
    try {
        const allData = await USER.find();
        res.status(200).json({
            status: 'Success',
            message: 'User view success',
            data: allData,

        })
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const delteId = req.params.id
        const deleteData = await USER.findByIdAndDelete(delteId)
        res.status(200).json({
            status: 'Success',
            message: 'User delete success',
            data: deleteData
        })
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const updateId = req.params.id
        const data = req.body
        const updateData = await USER.findByIdAndUpdate(updateId, data, { new: true })
        res.status(200).json({
            status: 'Success',
            message: 'User update success',
            data: updateData
        })
    }
    catch (error) {
        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}