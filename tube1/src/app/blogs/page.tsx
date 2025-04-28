'use client';

import React, { useState, ChangeEvent } from 'react';
import CustomEditor from '../../components/customeditor/custom_editor';
import BlogsUpdate from './blogsupdate';
import Header from '@/components/Header';

interface BlogPost {
  title: string;
  paragraph: string;
  image: File | null;
  authorName: string;
  authorImage: File | null;
  authorDesignation: string;
  tags: string;
  publishDate: string;
}

const CreateBlogPage: React.FC = () => {
  const [blog, setBlog] = useState<BlogPost>({
    title: '',
    paragraph: '',
    image: null,
    authorName: '',
    authorImage: null,
    authorDesignation: '',
    tags: '',
    publishDate: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setBlog((prevBlog) => ({
        ...prevBlog,
        [name]: files[0],
      }));
    }
  }

  function handleEditorChange(data: string) {
    setBlog((prevBlog) => ({
      ...prevBlog,
      paragraph: data,
    }));
  }

  async function handleSubmit() {
    setLoading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('title', blog.title);
    formData.append('paragraph', blog.paragraph);
    if (blog.image) formData.append('image', blog.image);
    formData.append('authorName', blog.authorName);
    if (blog.authorImage) formData.append('authorImage', blog.authorImage);
    formData.append('authorDesignation', blog.authorDesignation);
    formData.append('tags', blog.tags);
    formData.append('publishDate', blog.publishDate); // Ensure this line is not commented out

    try {
      const response = await fetch('http://localhost:5000/blogs/create-blog', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('✅ Blog submitted successfully!');
        setBlog({
          title: '',
          paragraph: '',
          image: null,
          authorName: '',
          authorImage: null,
          authorDesignation: '',
          tags: '',
          publishDate: '',
        });
      } else {
        setMessage(`❌ Submission failed: ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('❌ Error submitting blog.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
  
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create Blog</h1>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="title"
          value={blog.title}
          onChange={handleChange}
          placeholder="Enter Blog Title"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <div className="border border-gray-300 rounded">
          <CustomEditor
            onChange={(data: string) => handleEditorChange(data)}
          />
        </div>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="authorName"
          value={blog.authorName}
          onChange={handleChange}
          placeholder="Author Name"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="file"
          name="authorImage"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="authorDesignation"
          value={blog.authorDesignation}
          onChange={handleChange}
          placeholder="Author Designation"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="tags"
          value={blog.tags}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="publishDate"
          value={blog.publishDate}
          onChange={handleChange}
          placeholder="Publish Date (YYYY-MM-DD)"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        {message && <p className="text-center text-sm mt-2">{message}</p>}
      </form>
      <BlogsUpdate/>
    </div>
    </>
  );
};

export default CreateBlogPage;
