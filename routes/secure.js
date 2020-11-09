const express = require('express');
const router = express.Router();

router.post('/submit-score', (req,res) => {
  res.status('200');
  res.json({'status': 'ok'})
})


router.post('/scores', (req,res) => {
  res.status('200');
  res.json({'status': 'ok'})
})

module.exports = router;