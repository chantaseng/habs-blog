import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: 'Slavkovsky is set to breakout next season',
      body: 'lorem ipsum...',
      author: 'William C.',
      id: 1,
    },
    {
      title: 'Caufield expected to reach 50 goals next year',
      body: 'lorem ipsum...',
      author: 'Khaliun B.',
      id: 2,
    },
    {
      title: 'Suzuki 80 points next year?',
      body: 'lorem ipsum...',
      author: 'William C.',
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-8">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
