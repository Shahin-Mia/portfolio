import React from 'react';
import BlogCards from './BlogCards';
import blog from './BlogList';

const Blog = () => {
    const blogs = blog;
    return (
        <div className="blog-container">
            <div className="container">
                <h2 className="text-center mt-5" data-aos="fade-left">BLOG</h2>
                <div className="underline mb-5" data-aos="fade-right"></div>
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        blogs.map(blog => <BlogCards key={blog.id} blog={blog} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;