import React from "react";
import { Link } from "react-router-dom";

const Home = ({ match }) => (
  <div>
    <p>Home</p>
    <ul>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact Me</Link>
      </li>
    </ul>
  </div>
);

export default Home;
