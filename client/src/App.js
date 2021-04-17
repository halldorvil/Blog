import React, { useState, useEffect } from "react";
import PageHeader from "./components/PageHeader";
import BlogPosts from "./components/BlogPosts";
import axios from "axios";

export default () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get("/api/v1/blogposts");
      setBlogPosts(data.data);
    };

    getPosts().then();
  }, []);

  return (
    <div>
      <PageHeader
        title="Halldór Vilhjálmsson"
        image={process.env.PUBLIC_URL + "/images/profile-pic-1.jpg"}
      />
      <div className="ui container">
        <BlogPosts posts={blogPosts} />
      </div>
    </div>
  );
};
