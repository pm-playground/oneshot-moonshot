require('dotenv').config();
const cookieParser = require('cookie-parser');
const passport = require('passport');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/main');
const secureRoutes = require('./routes/secure');

const uri = process.env.MONGO_URL;

mongoose.connect(uri,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on('error', (error) => {
  console.log(error);
  process.exit(1);
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDb');
});

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json());

app.use(cookieParser());
// require passport auth
require('./auth/auth')
//* main routes 
app.use('/', routes);
app.use('/', passport.authenticate('jwt', {session: false}), secureRoutes);

//* handle all other routes
app.use((req,res) => {
  res.status(404);
  res.json({message: '404 - No Found'});
});

//* handle errors

app.use((err,req,res) => {
  res.status(err.status || 500);
  res.json({err: err});
});

//* start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started in port: ${ process.env.PORT ||3000}`);
});

