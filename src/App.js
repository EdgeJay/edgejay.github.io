import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from "./TopNav";
import Home from "./Home";
import Blog from "./Blog";
import Projects from "./Projects";
import Contact from "./Contact";
import NotFound from "./NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
