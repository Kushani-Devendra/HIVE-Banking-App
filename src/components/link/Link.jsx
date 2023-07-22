import React from "react";
import { Link as NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Link = ({ navigate, children }) => {
  return (
    <NavLink className="teal fs-15" to={navigate}>
      {children}
    </NavLink>
  );
};

export default Link;

Link.propTypes = {
  navigate: PropTypes.string,
  children: PropTypes.string,
};
