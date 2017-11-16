var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res) {
    res.render('about', { title: 'Home'});
});

router.get('/report', function(req, res) {
    res.render('report', { title: 'Reports'});
});

router.get('/demo', function(req, res) {
    res.render('demo', { title: 'Demo'})
});

router.get('/chat', function(req, res) {
    res.render('chat', { title: 'Chat'})
});

module.exports = router;
