const User = require("../model/user.model");

const getUsers = async function (req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getMe = async function (req, res) {
    try {
        const me = await User.findById(req.user.id);
        res.status(200).json(me);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getUsers, getMe };
