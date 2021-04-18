import React from "react";
import BlogPost from "./BlogPost";

const BlogPosts = (props) => {
  const posts = props.posts.map((post) => {
    return <BlogPost key={post.id} post={post} />;
  });

  return (
    <div className="max-w-6xl md:max-w-4xl sm:max-w-3xl mx-auto">{posts}</div>
  );
};

export default BlogPosts;
