const express = require('express');
const router = express.Router();

router.get('/status', (req,res) => {
  res.status(200);
  res.json({'status': "ok"});
})

module.exports = router;