'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';

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

const BlogDetailsPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (id) {
          const response = await axios.get(`https://g2code.onrender.com/blogs/blogs-data/${id}`);
          const data = response.data;
          setBlog(data.blog);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to fetch blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;
  if (!blog) return <div className="text-center mt-10">No Blog Found.</div>;

  return (
    <section className="pb-[120px] pt-[120px]">
      <div className="container">
        <div className="max-w-3xl mx-auto p-4">
          {/* Blog Title */}
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

          {/* Author Information */}
          <div className="flex items-center mb-6">
            {blog.author?.imageUrl && (
              <div className="relative h-12 w-12 overflow-hidden rounded-full mr-4">
                <Image
                  src={`http://localhost:5000${blog.author.imageUrl}`}
                  alt={blog.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <h4 className="text-sm font-medium text-dark dark:text-white">
                By {blog.author.name}
              </h4>
              <p className="text-xs text-body-color">{blog.author.designation}</p>
            </div>
          </div>

          {/* Blog Publish Date */}
          <p className="text-sm text-gray-500 mb-4">
            Published on: {new Date(blog.publishDate).toLocaleDateString()}
          </p>

          {/* Blog Image */}
          {blog.imageUrl && (
            <div className="mb-6">
              <Image
                src={`http://localhost:5000${blog.imageUrl}`}
                alt={blog.title}
                width={800}
                height={450}
                className="w-full rounded-lg object-cover"
              />
            </div>
          )}

          {/* Blog Paragraph */}
          <div
            className="mb-6 text-base font-medium text-body-color"
            dangerouslySetInnerHTML={{ __html: blog.paragraph }} // Render HTML content
          />

          {/* Blog Tags */}
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
