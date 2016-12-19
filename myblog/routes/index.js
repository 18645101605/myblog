var express = require('express');
var router = express.Router();
var user=require('../controllers/user');

/* GET home page. */
router.get('/',user.index);
router.get('/login',user.login);
router.get('/reg',user.reg);
router.post('/regist',user.regist);
router.post('/checkLogin',user.checkLogin);
module.exports = router;
