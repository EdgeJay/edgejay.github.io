import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Tabs } from "reactackle";
import styled from "styled-components";

const tabs = [
  {
    text: "Home",
    linkHref: "/"
  },
  {
    text: "Blog",
    linkHref: "/blog"
  },
  {
    text: "Projects",
    linkHref: "/projects"
  },
  {
    text: "Contact Me",
    linkHref: "/contact"
  }
];

const StyledLink = styled(Link)`
  flex: 1;
  text-decoration: none;
`;

const LinkWrapper = ({ href, children }) => (
  <StyledLink to={href}>{children}</StyledLink>
);

function getSelectedTab(location) {
  for (let idx = 0; idx < tabs.length; idx += 1) {
    if (tabs[idx].linkHref === location.pathname) {
      return idx;
    }
  }

  return 0;
}

const TopNav = ({ location }) => (
  <Tabs
    tabs={tabs}
    selected={getSelectedTab(location)}
    linkComponent={LinkWrapper}
  />
);

export default withRouter(TopNav);
