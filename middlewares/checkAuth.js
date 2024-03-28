const jwt = require("jsonwebtoken");

module.exports = checkAuth = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) return res.status(401).json("Not Authorized!");

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) {
            return res.status(403).json("Invalid Token!");
        }
        req.user = user;
        next();
    });
};
