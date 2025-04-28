'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CustomEditor from '@/components/customeditor/custom_editor'; // Just import it normally ✅

interface BlogPost {
  _id: string;
  title: string;
  paragraph: string;
  imageUrl: string;
  author: {
    name: string;
    imageUrl: string;
    designation: string;
  };
  tags: string[];
  publishDate: string;
}

const BlogsUpdate: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [editBlog, setEditBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        if (id) {
          const response = await axios.get(`https://g2code.onrender.com/blogs/blogs-data/${id}`);
          setEditBlog(response.data.blog);
        } else {
          const response = await axios.get('https://g2code.onrender.com/blogs/blogs-data');
          if (Array.isArray(response.data.blogs)) {
            setBlogs(response.data.blogs);
          } else {
            throw new Error('Invalid response format. Expected an array of blogs.');
          }
        }
      } catch (err: any) {
        setError(err.message || 'Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [id]);

  const handleDelete = async (_id: string) => {
    if (!_id || _id.trim() === '') {
      console.error('Invalid blog ID:', _id);
      setMessage('❌ Invalid blog ID.');
      return;
    }

    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      const response = await axios.delete(`https://g2code.onrender.com/blogs/delete-blog/${_id}`);
      if (response.status === 200) {
        setMessage('✅ Blog deleted successfully!');
        setBlogs(blogs.filter((blog) => blog._id !== _id));
      } else {
        setMessage('❌ Failed to delete the blog.');
      }
    } catch (error) {
      setMessage('❌ Error deleting blog.');
      console.error('Error:', error);
    }
  };

  const handleEditorChange = (data: string) => {
    if (editBlog) {
      setEditBlog((prevBlog) => prevBlog ? { ...prevBlog, paragraph: data } : null);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (editBlog) {
      setEditBlog({ ...editBlog, [e.target.name]: e.target.value });
    }
  };

  const handleUpdate = async () => {
    if (!editBlog) return;

    try {
      const response = await axios.put(`https://g2code.onrender.com/blogs/update-blog/${editBlog._id}`, editBlog);
      if (response.status === 200) {
        setMessage('✅ Blog updated successfully!');
        setBlogs(blogs.map((blog) => (blog._id === editBlog._id ? editBlog : blog)));
        setEditBlog(null);
      } else {
        setMessage('❌ Failed to update the blog.');
      }
    } catch (error) {
      setMessage('❌ Error updating blog.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Manage Blogs</h1>

      {loading && <p className="text-center">Loading blogs...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {message && <p className="text-center text-green-500">{message}</p>}

      {!loading && !error && (
        <>
          <table className="w-full border-collapse border border-gray-300 mb-6">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Author Image</th>
                <th className="border border-gray-300 p-2">Title</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2">
                    {blog.author.imageUrl ? (
                      <img
                        src={`https://g2code.onrender.com/${blog.author.imageUrl}`}
                        alt={blog.author.name}
                        className="w-12 h-12 rounded-full"
                      />
                    ) : (
                      'No Image'
                    )}
                  </td>
                  <td className="border border-gray-300 p-2">{blog.title}</td>
                  <td className="border border-gray-300 p-2">
                    <button
                      className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 mr-2"
                      onClick={() => setEditBlog(blog)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(blog._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {editBlog && (
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4">Edit Blog</h2>
              <input
                type="text"
                name="title"
                value={editBlog.title}
                onChange={handleInputChange}
                placeholder="Blog Title"
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />

              <div className="border border-gray-300 rounded">
                <CustomEditor
                  onChange={handleEditorChange}
                  initialContent={editBlog.paragraph || ''}
                />
              </div>

              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
                onClick={handleUpdate}
              >
                Update Blog
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BlogsUpdate;
