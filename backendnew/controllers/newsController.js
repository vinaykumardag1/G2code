const { json } = require("body-parser");
const News = require("../models/newsModel");

exports.createNews = async (req, res) => {
  try {
    const { title, text } = req.body;

    if (!title || !text) {
      return res.status(400).json({ error: "Title and text are required." });
    }

    const img = req.file ? req.file.filename : null; // Save image filename

    const news = new News({ title, text, img });
    await news.save();

    res.status(201).json(news); // Return created news
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// fetch all news
exports.allNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete news by id
exports.deleteNews = async (req, res) => {
  try {
    const { newsId } = req.params;

    const news = await News.findByIdAndDelete(newsId);
    if (!news) {
      return res.status(404).json({ message: "news not found" });
    } else res.status(200).json({ message: "news deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
