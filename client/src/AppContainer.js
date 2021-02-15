import React from "react";

class AppContainer extends React.Component {
  state = { tab: null };

  componentDidMount() {
    this.setState({ tab: "blog" });
  }

  renderContent() {
    if (this.state.tab === "blog") {
      return <p>Blog</p>;
    }

    if (this.state.tab === "about") {
      return <p>About me</p>;
    }

    if (this.state.tab === "cv") {
      return <p>CV</p>;
    }

    return <p>Oops</p>;
  }

  renderMenu() {
    return (
      <div className="ui secondary pointing menu">
        <a
          className={this.state.tab === "blog" ? "item active" : "item"}
          onClick={() => this.openTab("blog")}
        >
          Blog
        </a>
        <a
          className={this.state.tab === "about" ? "item active" : "item"}
          onClick={() => this.openTab("about")}
        >
          About me
        </a>
        <a
          className={this.state.tab === "cv" ? "item active" : "item"}
          onClick={() => this.openTab("cv")}
        >
          CV
        </a>
      </div>
    );
  }

  openTab(tab) {
    this.setState({ tab: tab });
  }

  render() {
    return (
      <div>
        <div>{this.renderMenu()}</div>
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}

export default AppContainer;
