import React from "react";
import "../styles/Base.css";
import "../styles/PageHeader.css";

const PageHeader = ({ title, image }) => {
  return (
    <div className="page-header">
      <div className="page-header-profile-image image-cropper">
        <img className="profile-pic" alt="avatar" src={image} />
      </div>
      <div className="page-header-title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default PageHeader;
