import React from "react";
import ReactDOM from "react-dom";
import { injectGlobalStyle, injectResetStyle, Theme } from "reactackle";
import App from "./App";
import { reactackleThemeMixin } from "./themes/base";
import registerServiceWorker from "./registerServiceWorker";

injectGlobalStyle();
injectResetStyle();

ReactDOM.render(
  <Theme mixin={reactackleThemeMixin}>
    <App />
  </Theme>,
  document.getElementById("root")
);
registerServiceWorker();
