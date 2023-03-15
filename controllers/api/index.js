const router = require('express').Router();
const twohome = require('./routes2-home');

router.use('/user', twohome);

module.exports = router;

