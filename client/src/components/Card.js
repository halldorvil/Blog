import React from "react";

const Card = ({ children }) => {
  return (
    <div className="border border-gray-200 rounded-md shadow-md">
      {children}
    </div>
  );
};

export default Card;
