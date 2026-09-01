const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const usersPath = path.join(__dirname, "../data/users.json");

router.get("/", (req, res) => {
    try {
        const data = fs.readFileSync(usersPath, "utf8");
        const users = JSON.parse(data);

        res.json({
            success: true,
            count: users.length,
            data: users
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to load users"
        });
    }
});

router.post("/", (req, res) => {
    try {
        const data = fs.readFileSync(usersPath, "utf8");
        const users = JSON.parse(data);

        const newUser = {
            id: Date.now(),
            name: req.body.name,
            age: req.body.age,
            userType: req.body.userType,
            diet: req.body.diet,
            trimester: req.body.trimester || null
        };

        users.push(newUser);

        fs.writeFileSync(
            usersPath,
            JSON.stringify(users, null, 2)
        );

        res.status(201).json({
            success: true,
            message: "User saved successfully",
            data: newUser
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to save user"
        });
    }
});

module.exports = router;