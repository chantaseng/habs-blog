import { Button } from '@chakra-ui/react';

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div>
      <h2 className="text-4xl font-bold p-4">{title}</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="p-4">
          <h2 className="text-2xl font-bold text-rose-400">{blog.title}</h2>
          <span className="mr-3">Written by {blog.author}</span>
          <Button onClick={() => handleDelete(blog.id)} bg="#fb7185">
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
