import React, { useState, useEffect } from "react";
import faker from "faker";
import PageHeader from "./components/PageHeader";
import BlogPosts from "./components/BlogPosts";
import blog from "./apis/blog";

export default () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await blog.get("/posts");
      setBlogPosts(data);
    };

    getPosts();
  }, []);

  return (
    <div>
      <PageHeader title="Halldór Vilhjálmsson" image={faker.image.image()} />
      <div className="ui container">
        <BlogPosts posts={blogPosts} />
      </div>
    </div>
  );
};
