import React, { useState, useEffect } from "react";
import PageHeader from "./components/PageHeader";
import BlogPosts from "./components/BlogPostList";
import Route from "./components/Route";
import axios from "axios";

export default () => {
  /*const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get("/api/v1/blogposts");
      setBlogPosts(data.data);
    };

    getPosts().then();
  }, []);*/

  const blogPosts = [
    {
      id: 1,
      created_on: "4/18/2021",
      title: "Hello",
      content: "Some text",
    },
  ];

  return (
    <div className="flex flex-col">
      <Route path="/">
        <div className="flex-1">
          <PageHeader
            title="Halldór Vilhjálmsson"
            image={process.env.PUBLIC_URL + "/images/profile-pic-1.jpg"}
          />
        </div>
        <div className="flex-1">
          <BlogPosts posts={blogPosts} />
        </div>
      </Route>
      <Route path="/oskalisti">
        <div className="flex-1">
          <PageHeader
            title="Óskalisti"
            image={process.env.PUBLIC_URL + "/images/xmas_decoration.jpg"}
          />
        </div>
        <div className="flex-1"></div>
      </Route>
    </div>
  );
};
