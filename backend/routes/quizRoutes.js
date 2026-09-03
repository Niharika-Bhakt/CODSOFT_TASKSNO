const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');


// ===============================
// CREATE A NEW QUIZ
// ===============================

router.post('/create', async (req, res) => {

    try {

        const { title, description, questions } = req.body;

        const newQuiz = new Quiz({
            title,
            description,
            questions
        });

        await newQuiz.save();

        res.status(201).json({
            message: 'Quiz created successfully!',
            quiz: newQuiz
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});


// ===============================
// GET ALL QUIZZES
// ===============================

router.get('/', async (req, res) => {

    try {

        const quizzes = await Quiz.find();

        res.status(200).json(quizzes);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});


// ===============================
// GET QUIZ BY CATEGORY
// ===============================

router.get('/category/:category', async (req, res) => {

    try {

        const category = req.params.category;

        const quiz = await Quiz.findOne({
            title: category
        });

        if (!quiz) {

            return res.status(404).json({
                message: 'Quiz not found'
            });

        }

        res.status(200).json(quiz);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});


module.exports = router;