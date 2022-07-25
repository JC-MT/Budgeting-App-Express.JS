const express = require('express');
const router = express.Router();
const transactions = require('../Models/Transactions');

router.use('/transactions/:id', (req, res, next) => {
  if (!transactions[req.params.id]) {
    res.status(404).redirect('/error');
  } else {
    next();
  }
});

router.get('/', (req, res) => {
  res.send("<h1>Express is Live</h1>");
});

router.get('/transactions', (req, res) => {
  res.json(transactions);
});

router.get('/transactions/:id', (req, res) => {
  res.json(transactions[req.params.id]);
});

router.post('/transactions', (req, res) => {
  transactions.push(req.body);
  res.json(transactions);
});

router.put('/transactions/:id', (req, res) => {
  transactions[req.params.id] = req.body;
  res.json(transactions[req.params.id]);
});

router.delete('/transactions/:id', (req, res) => {
  transactions.splice(req.params.id, 1);
  res.send(transactions);
});

module.exports = router;
