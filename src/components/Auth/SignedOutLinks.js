import React from "react";
import { Link } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div>
      <Link to="/">
        <button className="btn btn-outline-success mx-1">Login</button>
      </Link>
      <Link to="/signup">
        <button className="btn btn-outline-success mx-1">SignUp</button>
      </Link>
    </div>
  );
};

export default SignedOutLinks;
