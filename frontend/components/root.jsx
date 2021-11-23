import React from "react";
// import App from "./app";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        Test Text
      </div>
      {/* <App /> */}
    </HashRouter>
  </Provider>
);

export default Root