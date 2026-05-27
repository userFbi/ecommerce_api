const USER = require('../model/user');

// Create User
exports.createUser = async (req, res) => {
    try {
        const data = req.body;

        const newUser = await USER.create(data);

        res.status(201).json({
            status: 'Success',
            message: 'User created successfully',
            data: newUser
        });

    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};


// View Users
exports.viewUser = async (req, res) => {
    try {
        const users = await USER.find();

        res.status(200).json({
            status: 'Success',
            results: users.length,
            data: users
        });

    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: error.message
        });
    }
};


// Delete User
exports.deleteUser = async (req, res) => {
    try {
        const deleteId = req.params.id;

        const deletedUser = await USER.findByIdAndDelete(deleteId);

        if (!deletedUser) {
            return res.status(404).json({
                status: 'Fail',
                message: 'User not found'
            });
        }

        res.status(200).json({
            status: 'Success',
            message: 'User deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: error.message
        });
    }
};


// Update User
exports.updateUser = async (req, res) => {
    try {

        const user = await USER.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                status: 'Fail',
                message: 'User not found'
            });
        }

        user.userId = req.body.userId || user.userId;
        user.email = req.body.email || user.email;
        user.role = req.body.role || user.role;

        // if password sent
        if (req.body.password) {
            user.password = req.body.password;
        }

        await user.save();

        res.status(200).json({
            status: 'Success',
            message: 'User updated successfully',
            data: user
        });

    } catch (error) {

        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};