const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const User = require("../model/user.model");

const signUp = async function (req, res) {
    try {
        const userBody = req.body;
        if (userBody.password) {
            const salt = bcrypt.genSaltSync(10);
            const encrypted = bcrypt.hashSync(userBody.password, salt);
            const userCheck = await User.findOne({
                where: { nationalId: userBody.nationalId },
            });
            if (userCheck)
                res.status(400).json({ error: "User already Registered!" });
            userBody.password = encrypted;
            console.log(userBody);
            const newUser = await User.create(userBody);
            console.log(newUser);
            res.status(201).json("New User Created");
        } else {
            res.status(403).json("Please provide a password!");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const signIn = async function (req, res) {
    try {
        const user = await User.findOne({
            nationalId: req.body.nationalId,
        });

        if (!user) return res.status(404).json({ error: "User not found!" });
        const passCheck = await checkPassword(req.body.password, user.password);
        if (!passCheck) {
            return res.status(400).json({ error: "User credential error" });
        }
        const { access_token, refresh_token } = tokenGenerate(user._id);

        res.cookie("access_token", access_token, {
            httpOnly: false,
        })
            .status(200)
            .json({
                _id: user._id,
                refresh_token: refresh_token,
            });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const signOut = async function (req, res) {
    res.clearCookie("access_token");
    res.status(200).json("Signed out successfuly.");
};

const checkPassword = async function (password, hash) {
    const check = await bcrypt.compare(password, hash);
    if (check) {
        return true;
    } else {
        return false;
    }
};

const tokenGenerate = function (userId, expiresIn) {
    const secret = process.env.SECRET;
    const access_token = jsonwebtoken.sign({ id: userId }, secret, {
        expiresIn: "24h",
    });
    const refresh_token = jsonwebtoken.sign(
        { id: userId },
        secret + "_refresh",
        {
            expiresIn: expiresIn || "336h",
        }
    );

    return {
        access_token,
        refresh_token,
    };
};

// const refreshToken = async function (token) {
//     const secret = "re20";
//     const payload = jsonwebtoken.verify(token, secret + "_refresh");
//     console.log(payload);
//     if (!payload) throw new HttpException("TOKEN_EXPIRED", 403);
//     const user = await User.findById(payload._id)

//     if (!user) throw new HttpException("USER_NOT_FOUND", 403);

//     const { access_token, refresh_token } = this.TokenGenerate(user);
//     return {
//         access_token,
//         refresh_token,
//     };
// };

module.exports = { signUp, signIn, signOut };
