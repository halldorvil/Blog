import React, { useState, useEffect } from "react";
import faker from "faker";
import PageHeader from "./components/PageHeader";
import BlogPosts from "./components/BlogPosts";
import axios from "axios";

export default () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get("/api/blog/posts");
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
