import React from "react";
import Tabs from "./Tabs";
import TabPane from "./TabPane";

const AppContainer = (props) => {
  return (
    <Tabs>
      <TabPane name="Blog" key="1">
        Welcome to my blog!
      </TabPane>
      <TabPane name="About me" key="2">
        Who am I?
      </TabPane>
      <TabPane name="CV" key="3">
        Check out my CV!
      </TabPane>
    </Tabs>
  );
};

export default AppContainer;
