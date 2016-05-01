"use strict";

const express = require('express');
const router = new express.Router();
const jsonQuestions = require('../routes/questions');
const reset = jsonQuestions.load();
const questions = [];

for (var i = 0; i < reset.length; i++) {
  questions.push(reset[i]);
}

const results = {
  correctQuestions: [],
  incorrectQuestions: [],
  correctTotal: 0,
  incorrectTotal: 0
};

router.get('/', function (req, res) {
  res.redirect('questions/1');
});

router.get('/questions/:id', function (req, res) {
  const question = shuffle(questions).pop();
  question.answers = shuffle(question.answers);

  if (question) {
    question.number = parseInt(req.params.id, 10);
    question.nextNumber = question.number + 1;
    res.render('questions.html', {question});
  } else {
    res.redirect('/results');
  }
});

router.post('/questions/:id', function (req, res) {
  const questionNumber = parseInt(req.body.number, 10);
  const nextQuestion = questionNumber + 1;
  const correct = req.body.correct;
  const answer = req.body.answer;

  if (answer.toLowerCase() === correct.toLowerCase()) {
    results.correctTotal++;
    results.correctQuestions.push({question: req.body.question, answer: req.body.answer, correct: req.body.correct});
  } else {
    results.incorrectTotal++;
    results.incorrectQuestions.push({question: req.body.question, answer: req.body.answer, correct: req.body.correct});
  }

  res.redirect(nextQuestion);
});

router.get('/results', function (req, res) {
  var total = results.correctTotal + results.incorrectTotal;
  results.percentage = Math.round((results.correctTotal / total) * 100);
  res.render('results.html', {results});
});

router.get('/reset', function (req, res) {
  for (var i = 0; i < reset.length; i++) {
    questions.push(reset[i]);
  }

  results.correctQuestions = [];
  results.incorrectQuestions = [];
  results.correctTotal = 0;
  results.incorrectTotal = 0;

  res.redirect('/');
});

module.exports = router;

function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

