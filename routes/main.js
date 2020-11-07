const express = require('express');
const router = express.Router();

router.get('/status', (req,res) => {
  res.status(200);
  res.json({'status': 'ok'});
})

//* <-.login signup.->
router.post('/signup', (req,res)=> {
  res.status(200);
  res.json({'status': 'ok'})
})

router.post('/login', (req,res)=> {
  res.status(200);
  res.json({'status': 'ok'})
})

router.post('/logout', (req,res)=> {
  res.status(200);
  res.json({'status': 'ok'})
})
router.post('/token', (req,res)=> {
  res.status(200);
  res.json({'status': 'ok'})
})

module.exports = router;