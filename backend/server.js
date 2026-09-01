const express = require("express");
const cors = require("cors");

const meals = require("./data/meals.json");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        project: "SheHealth",
        message: "SheHealth backend is running"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        status: "Backend is healthy"
    });
});

app.get("/api/meals", (req, res) => {
    res.json({
        success: true,
        count: meals.length,
        data: meals
    });
});

app.listen(PORT, () => {
    console.log(`SheHealth backend running at http://localhost:${PORT}`);
});