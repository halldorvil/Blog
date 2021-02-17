import React, { useEffect, useState } from "react";
import TabPane from "./TabPane";

const Tabs = (props) => {
  const { children } = props;
  const [tabHeader, setTabHeader] = useState([]);
  const [childContent, setChildContent] = useState({});
  const [active, setActive] = useState("");

  useEffect(() => {
    const headers = [];
    const childCnt = {};

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { name } = element.props;
      headers.push(name);
      childCnt[name] = element.props.children;
    });

    setTabHeader(headers);
    setActive(headers[0]);
    setChildContent({ ...childCnt });

    console.log(childCnt);
  }, [props, children]);

  const changeTab = (name) => {
    setActive(name);
  };

  return (
    <div>
      <div className="ui secondary pointing menu">
        {tabHeader.map((item) => (
          <a
            onClick={() => changeTab(item)}
            key={item}
            className={item === active ? "item active" : "item"}
          >
            {item}
          </a>
        ))}
      </div>
      <div className="ui container">
        {Object.keys(childContent).map((key) => {
          if (key === active) {
            return <div className="tab-child">{childContent[key]}</div>;
          }

          return null;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName];

    let error = null;

    React.Children.forEach(prop, function (child) {
      if (child.type !== TabPane) {
        error = new Error(
          "`" + componentName + "` children should be of type `TabPane`."
        );
      }
    });

    return error;
  },
};

export default Tabs;
