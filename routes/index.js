'use strict';
const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
  res.render('index.html');
});

router.get('/reset', (req, res) => {
  for (const cookie in req.cookies) {
    if (req.cookies.hasOwnProperty(cookie)) {
      res.clearCookie(cookie);
    }
  }
  res.redirect('/');
});

module.exports = router;
