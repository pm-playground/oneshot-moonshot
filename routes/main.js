const express = require('express');
const router = express.Router();
const asyncMiddleware = require('../middleware/asyncMiddleware');
const UserModel = require('../models/userModel');

router.get('/status', (req, res, next) => {
  res.status(200);
  res.json({'status': 'ok'});
})

//* <-.login signup.->
router.post('/signup', asyncMiddleware( async(req, res, next) => {
 const { name, email, password } = req.body;
 await UserModel.create({ email, password, name });
 res.status(200).json({'status': 'ok'});
}));

router.post('/login', (req, res, next)=> {
  res.status(200);
  res.json({'status': 'ok'})
})

router.post('/logout', (req, res, next)=> {
  res.status(200);
  res.json({'status': 'ok'})
})
router.post('/token', (req, res, next)=> {
  res.status(200);
  res.json({'status': 'ok'})
})

module.exports = router;