const mongoose = require('mongoose');

// Define Author sub-schema
const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
});

// Define BlogPost main schema
const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true, // HTML content from your editor (CustomEditor)
  },
  imageUrl: {
    type: String,
    required: true, // main blog image (uploaded)
  },
  author: {
    type: AuthorSchema,
    required: true, // includes name, imageUrl, and designation
  },
  tags: {
    type: [String], // Array of tags (from comma separated input)
    required: true,
  },
  publishDate: {
    type: Date,
    required: true, // formatted from frontend input
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields automatically
});

// Export the model
module.exports = mongoose.model('BlogPost', BlogPostSchema);
