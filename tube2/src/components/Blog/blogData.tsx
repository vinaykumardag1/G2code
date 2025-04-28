'use client';

import { useEffect, useState } from 'react';
import { Blog } from '@/types/blog';

const useBlogData = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('http://localhost:5000/blogs/blogs-data');
        const data = await res.json();
        setBlogs(data);
        console.log('Blogs:', data);
      } catch (err) {
        setError('Failed to load blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, loading, error };
};

export default useBlogData;