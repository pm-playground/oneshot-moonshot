require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/main');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

//* main routes 
app.use('/', routes);

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

