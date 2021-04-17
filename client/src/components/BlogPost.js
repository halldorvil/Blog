import React from "react";
import moment from "moment";
import "../styles/BlogPost.css";

const BlogPost = ({ post: { content, created_on, title } }) => {
  moment.locale("en");
  
  return (
    <div className="blog-post">
      <div className="blog-post-content">
        <div className="blog-post-heading">
          <h1 className="blog-post-title">{title}</h1>
          <p className="blog-post-date">{moment(created_on).format("MMM Do YYYY")}</p>
        </div>
        <p className="blog-post-text">{content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
