'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

// Define the Blog interface properly
interface Blog {
  _id: string; // Use _id to match the backend's blog ID field
  title: string;
  imageUrl: string;
  paragraph: string;
  tags: string[];
  publishDate: string;
  author: {
    name: string;
    imageUrl: string;
    designation: string;
  };
}

const Blog: React.FC = () => {
  const [Blogs, setBlogs] = useState<Blog[]>([]); // Set the correct type here
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://g2code.onrender.com/blogs/blogs-data');
        const data = response.data;

        console.log('Blogs:', data); // Debugging: check what data is returned

        // Check if data.blogs is an array before setting state
        if (Array.isArray(data.blogs)) {
          setBlogs(data.blogs);
        } else {
          throw new Error('Invalid response format. Expected an array of blogs.');
        }
      } catch (err: any) {
        setError(err.message || 'Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="pb-[120px] pt-[120px]">
      <div className="container">
        {loading && <p className="text-center">Loading blogs...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="-mx-4 flex flex-wrap justify-center">
            {Blogs.map((blog) => (
              <div key={blog._id} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
                  {/* Dynamic Link with blog ID */}
                  <Link href={`/blog-details/${blog._id}`} className="relative block aspect-[37/22] w-full">
                    <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
                      {blog.tags[0]}
                    </span>
                    <Image src={`http://localhost:5000${blog.imageUrl}`} alt={blog.title} fill className="object-cover" />
                  </Link>
                  <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                    <h3>
                      <Link
                        href={`/blog/${blog._id}`} // Corrected Dynamic Link with blog ID
                        className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
                      >
                        {blog.title}
                      </Link>
                    </h3>
                    <div
                      className="mb-6 line-clamp-2 text-body-color border-opacity-10 pb-6 text-base font-medium dark:border-white dark:border-opacity-10"
                      dangerouslySetInnerHTML={{ __html: blog.paragraph }} // Render HTML content
                    />
                    <div className="flex items-center">
                      <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                        <div className="mr-4">
                          <div className="relative h-10 w-10 overflow-hidden rounded-full">
                            <Image src={`http://localhost:5000${blog.author.imageUrl}`} alt={blog.author.name} fill />
                          </div>
                        </div>
                        <div className="w-full">
                          <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                            By {blog.author.name}
                          </h4>
                          <p className="text-xs text-body-color">{blog.author.designation}</p>
                        </div>
                      </div>
                      <div className="inline-block">
                      <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">Date</h4>
<p className="text-xs text-body-color">{new Date(blog.publishDate).getFullYear()}</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
