const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

const app = express();

// Use bodyParser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define an endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
  // Get the form data from the request body
  const formData = req.body;

  // Write the form data to a JSON file-save to database instead 
  fs.writeFile('form-data.json', JSON.stringify(formData), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving form data');
    } else {
      res.send('Form data saved successfully');
    }
  });
});
//router.get('/login', (req, res) => {if(req.session.logged_in) {res.redirect('/');return;}res.render('login');})
// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
module.exports = router;
// routes that take the user betweent he diffrent pages/stages of character creation 