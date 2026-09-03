const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true,
            trim: true
        },

        category: {
            type: String,
            required: true,
            trim: true
        },

        difficulty: {
            type: String,
            required: true,
            enum: ["Easy", "Medium", "Hard"]
        },

        theme: {
            type: String,
            default: "QuizVerse Purple & Pink"
        },

        creator: {
            type: String,
            default: "QuizVerse Creator"
        },

        team: {
            type: String,
            default: "QuizVerse Team"
        },

        questions: [
            {
                question: {
                    type: String,
                    required: true,
                    trim: true
                },

                options: {
                    A: {
                        type: String,
                        required: true
                    },

                    B: {
                        type: String,
                        required: true
                    },

                    C: {
                        type: String,
                        required: true
                    },

                    D: {
                        type: String,
                        required: true
                    }
                },

                correct: {
                    type: String,
                    required: true,
                    enum: ["A", "B", "C", "D"]
                }
            }
        ],

        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);


module.exports = mongoose.model("Quiz", quizSchema);