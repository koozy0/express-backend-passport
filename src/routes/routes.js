const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({
  msg: 'Hello! Server is running!'
}));

router.all('*', (req, res) => res.sendStatus(404));

module.exports = router;