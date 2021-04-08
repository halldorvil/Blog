import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "../styles/BlogPost.css";

const BlogPost = ({ post }) => {
  const [visibility, setVisibility] = useState(false);

  console.log(visibility);

  return (
    <VisibilitySensor onChange={(isVisible) => setVisibility(isVisible)}>
      <div className="blog-post">
        <div className="blog-post-content">
          <div className="blog-post-heading">
            <h1 className="blog-post-title">{post.title}</h1>
            <p className="blog-post-date">{post.date}</p>
          </div>
          <p className="blog-post-text">{post.content}</p>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default BlogPost;
