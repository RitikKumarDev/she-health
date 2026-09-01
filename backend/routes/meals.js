const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const mealsPath = path.join(__dirname, "../data/meals.json");

router.get("/", (req, res) => {
    try {
        const data = fs.readFileSync(mealsPath, "utf8");
        let meals = JSON.parse(data);

        const { userType, trimester, category } = req.query;

        if (userType) {
            meals = meals.filter(
                meal => meal.userType === userType
            );
        }

        if (trimester) {
            meals = meals.filter(
                meal => Number(meal.trimester) === Number(trimester)
            );
        }

        if (category) {
            meals = meals.filter(
                meal => meal.category === category
            );
        }

        res.json({
            success: true,
            count: meals.length,
            data: meals
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to load meals"
        });
    }
});

module.exports = router;