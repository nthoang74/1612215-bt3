import express from "express";

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Bai Tap 3 - Web 1612215' });
});

module.exports = router;
