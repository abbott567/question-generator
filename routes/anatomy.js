'use strict';
const express = require('express');
const router = new express.Router();
const allQuestions = require('../questions/anatomy-questions');

router.get('/', (req, res) => {
  const qOrder = getOrder();
  const correct = [];
  const incorrect = [];

  res.cookie('qOrder', qOrder);
  res.cookie('correct', JSON.stringify(correct));
  res.cookie('incorrect', JSON.stringify(incorrect));
  res.redirect('questions/1');
});

router.get('/questions/:id', (req, res) => {
  const qOrder = req.cookies.qOrder;
  const getQ = shuffle(qOrder).pop();
  const question = allQuestions[getQ];
  const resultsLink = '/anatomy/results';

  res.cookie('qOrder', qOrder);

  if (question) {
    question.answers = shuffle(question.answers);
    question.number = req.params.id;
    question.arrayPos = getQ;
    res.render('questions.html', {question, resultsLink});
  } else {
    res.redirect(resultsLink);
  }
});

router.post('/questions/:id', (req, res) => {
  const nextQuestion = parseInt(req.params.id, 10) + 1;
  const correct = req.body.correct.toLowerCase();
  const answer = req.body.answer.toLowerCase();
  const correctArray = JSON.parse(req.cookies.correct);
  const incorrectArray = JSON.parse(req.cookies.incorrect);

  if (answer === correct) {
    correctArray.push(req.body.arrayPos);
    res.cookie('correct', JSON.stringify(correctArray));
  } else {
    incorrectArray.push(req.body.arrayPos);
    res.cookie('incorrect', JSON.stringify(incorrectArray));
  }
  res.redirect(`${nextQuestion}`);
});

router.get('/results', (req, res) => {
  const correctArray = JSON.parse(req.cookies.correct);
  const incorrectArray = JSON.parse(req.cookies.incorrect);
  const show = {correct: false, incorrect: false};

  const results = {
    correctQuestions: correctArray,
    incorrectQuestions: incorrectArray,
    correctTotal: correctArray.length,
    incorrectTotal: incorrectArray.length
  };

  const total = results.correctTotal + results.incorrectTotal;
  results.percentage = Math.round((results.correctTotal / total) * 100);

  if (results.correctTotal > 0) {
    show.correct = true;
  }

  if (results.incorrectTotal > 0) {
    show.incorrect = true;
  }

  res.render('results.html', {results, allQuestions, show});
});

router.get('/reset', (req, res) => {
  for (const cookie in req.cookies) {
    if (req.cookies.hasOwnProperty(cookie)) {
      res.clearCookie(cookie);
    }
  }
  res.redirect('/');
});

router.get('/question-checker', (req, res) => {
  const mismatch = [];

  for (let i = 0; i < allQuestions.length; i++) {
    let answerNum = 0;
    let correct = 0;

    for (let n = 0; n < allQuestions[i].answers.length; n++) {
      const thisAnswer = allQuestions[i].answers[n].answer.toLowerCase();
      const correctAnswer = allQuestions[i].correct.toLowerCase();

      if (thisAnswer === correctAnswer) {
        correct++;
      }

      answerNum++;
    }

    if (answerNum === 4 && correct === 0) {
      mismatch.push(allQuestions[i].question);
    }
  }

  res.render('question-checker.html', {mismatch});
});

module.exports = router;

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getOrder() {
  const qOrder = [];

  for (let i = 0; i < allQuestions.length; i++) {
    qOrder.push(i);
  }
  shuffle(qOrder);
  return qOrder;
}
