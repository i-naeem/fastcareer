import { useEffect, useState } from 'react';

const usePosts = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(() => true);
        const posts = await fetch('http://127.0.0.1:5000/posts');
        const data = await posts.json();
        setPosts(() => data);
      } catch (error) {
        setIsError(() => true);
      } finally {
        setIsLoading(() => false);
      }
    };

    fetchPosts();
  }, []);

  return { isLoading, isError, posts };
};

export default usePosts;
