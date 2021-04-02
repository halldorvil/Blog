import React from "react";
import "../styles/Base.css";
import "../styles/PageHeader.css";

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header">
        <div className="page-header-profile-image image-cropper">
          <img className="profile-pic" alt="avatar" src={this.props.image} />
        </div>
        <div className="page-header-title">
          <h3>{this.props.title}</h3>
        </div>
      </div>
    );
  }
}

export default PageHeader;
