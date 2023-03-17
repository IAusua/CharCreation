const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth')




//add routes to this
router.get('/',  async (req, res) {
    

    res.render('main');
});





//router.get('/login', (req, res) => {if(req.session.logged_in) {res.redirect('/');return;}res.render('login');})

module.exports = router;