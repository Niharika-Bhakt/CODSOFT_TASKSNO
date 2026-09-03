const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const quizRoutes = require("./routes/quizRoutes");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json({
        message: "QuizVerse Backend is running!"
    });
});

app.use("/api/quizzes", quizRoutes);

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 10000
        });

        console.log("Connected to MongoDB Atlas Successfully!");

        app.listen(PORT, () => {
            console.log(`QuizVerse backend running on port ${PORT}`);
        });

    } catch (error) {
        console.error("MongoDB connection error:");
        console.error(error.message);
    }
}

startServer();