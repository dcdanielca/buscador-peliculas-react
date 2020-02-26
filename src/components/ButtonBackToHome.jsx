import React from "react";
import { Link } from "react-router-dom";

const ButtonBackToHome = () => (
  <Link to={`/`} className="button is-info">
    Back
  </Link>
);

export default ButtonBackToHome;
