import React from "react";

const PageHeader = ({ title, image }) => {
  return (
    <div className="flex flex-row items-center border-b border-gray-100 shadow-sm p-1">
      <div className="relative w-36 h-36 mx-10 my-4">
        <img
          className="rounded-full border border-gray-100 shadow-md"
          alt="avatar"
          src={image}
        />
      </div>
      <div className="m-1">
        <h3 className="font-serif text-2xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default PageHeader;
