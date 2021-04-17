import React from "react";
import BlogPost from "./BlogPost";
import "../styles/BlogPosts.css";

const BlogPosts = (props) => {
  const posts = props.posts.map((post) => {
    return <BlogPost key={post.id} post={post} />;
  });

  return <div className="blog-posts">{posts}</div>;
};

export default BlogPosts;
