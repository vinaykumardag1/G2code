const express = require('express');
const {allNews , createNews, deleteNews} = require('../controllers/newsController');

const upload = require("../middleware/multermiddleware");
const router = express.Router();


router.post("/create", upload, createNews); 
router.post('/delete/:newsId', deleteNews)  //delete single news
router.get('/allnews', allNews);  //fetch all news

module.exports = router;
