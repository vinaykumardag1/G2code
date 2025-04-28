const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const BlogPost = require('../models/blogs'); // Adjust the path as needed

const router = express.Router();

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Create a new blog
router.post(
  '/create-blog',
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'authorImage', maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      const { title, paragraph, authorName, authorDesignation, tags, publishDate } = req.body;
      const imageFile = req.files?.image?.[0];
      const authorImageFile = req.files?.authorImage?.[0];

      // 3. Validate required fields
      if (
        !title ||
        !paragraph ||
        !authorName ||
        !authorDesignation ||
        !tags ||
        !publishDate ||
        !imageFile ||
        !authorImageFile
      ) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      // 4. Create blog post data
      const blogPostData = {
        title,
        paragraph,
        imageUrl: `/uploads/${imageFile.filename}`,
        author: {
          name: authorName,
          imageUrl: `/uploads/${authorImageFile.filename}`,
          designation: authorDesignation,
        },
        tags: tags.split(',').map((tag) => tag.trim()),
        publishDate: new Date(publishDate),
      };

      // 5. Save to MongoDB
      const savedBlogPost = await BlogPost.create(blogPostData);

      return res.status(201).json({ message: 'Blog created successfully', blog: savedBlogPost });
    } catch (error) {
      console.error('Error creating blog:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
);
// Fetch all blogs
router.get('/blogs-data', async (req, res) => {
  try {
    const blogs = await BlogPost.find(); // Fetch all blog posts from the database
    return res.status(200).json({ message: 'Blogs fetched successfully', blogs });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
router.get('/blogs-data/:id', async (req, res) => {
  try {
    const blogId = req.params.id;

    // Validate ObjectId format
    if (!blogId || !mongoose.Types.ObjectId.isValid(blogId)) {
      return res.status(400).json({ message: 'Invalid or missing blog ID' });
    }

    const blog = await BlogPost.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    return res.status(200).json({ message: 'Blog fetched successfully', blog });
  } catch (error) {
    console.error('Error fetching blog by ID:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Update a blog
router.put(
  '/update-blog/:id',
 
  async (req, res) => {
    try {
      const { id } = req.params;
      console.log('ID:', id);

      const { paragraph, authorName, authorDesignation } = req.body;

      const blog = await BlogPost.findById(id);
      if (!blog) return res.status(404).json({ message: 'Blog not found' });

      // Update paragraph
      blog.paragraph = paragraph || blog.paragraph;

      // Update author details
      blog.author.name = authorName || blog.author.name;
      blog.author.designation = authorDesignation || blog.author.designation;
     

      const updatedBlog = await blog.save();

      return res.json({ message: 'Blog updated successfully', blog: updatedBlog });
    } catch (error) {
      console.error('Error updating blog:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
);


// Delete a blog
router.delete('/delete-blog/:id', async (req, res) => {
  try {
    const { id } = req.params;

    console.log('Received ID:', id); // Debugging: Log the ID

    // Validate the id forat 
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid blog ID format. The ID must be a 24-character hex string.' });
    }

    // Attempt to delete the blog
    const deletedBlog = await BlogPost.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found. Unable to delete.' });
    }

    return res.status(200).json({ message: 'Blog deleted successfully', deletedBlog });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
