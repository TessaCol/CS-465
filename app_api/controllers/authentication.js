const jwt = require('jsonwebtoken');

const secret = "Key77";

module.exports.login = function (req, res) {
    const { username, password } = req.body;

    if (username === "admin" && password === "password") {
        const token = jwt.sign(
            { username },
            secret,
            { expiresIn: "1h" }
        );

        return res.status(200).json({ token });
    }

    return res.status(401).json({ message: "Invalid credentials" });
};