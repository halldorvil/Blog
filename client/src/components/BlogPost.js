import React from "react";
import moment from "moment";
import DOMPurify from "dompurify";
import Card from "./Card";

const BlogPost = ({ post: { content, created_on, title } }) => {
  moment.locale("en");

  return (
    <div className="mt-6">
      <Card>
        <div className="p-10">
          <h1 className="text-3xl font-bold font-serif">{title}</h1>
          <p className="text-gray-400 font-serif">
            {moment(created_on).format("MMM Do YYYY")}
          </p>
          <div
            className="mt-5 font-sans font-light tracking-wide"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
          />
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
