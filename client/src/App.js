import React, { useState, useEffect } from "react";
import PageHeader from "./components/PageHeader";
import BlogPosts from "./components/BlogPostList";
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
    <div className="flex flex-col">
      <div className="flex-1">
        <PageHeader
          title="Halldór Vilhjálmsson"
          image={process.env.PUBLIC_URL + "/images/profile-pic-1.jpg"}
        />
      </div>
      <div className="flex-1">
        <BlogPosts posts={blogPosts} />
      </div>
    </div>
  );
};
