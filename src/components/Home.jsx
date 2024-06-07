import { useState } from 'react';

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
      author: 'Anna S.',
      id: 3,
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto py-6 px-8">
      {blogs.map((blog) => (
        <div key={blog.id} className="p-4">
          <h2 className="text-3xl font-bold text-rose-400">{blog.title}</h2>
          <span>Written by {blog.author}</span>
        </div>
      ))}
    </div>
  );
};

export default Home;
