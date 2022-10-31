import React, { useState } from "react";

import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { getCreds } from "../../Store/Actions/Auth/AuthActions";

const Login = (props) => {
  const Navigate = useNavigate();
  const [creds, setCreds] = useState({ email: "", password: "" });

  let errMsg = null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.authenticate(creds);
    if (localStorage.getItem("token")) {
      props.showAlert("Logged In succesfully", "success");
      Navigate("/home");
    } else {
      props.showAlert("Enter Valid Credentials", "danger");
    }
  };

  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
    // console.log(props)
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2 className="my-3" style={{ borderBottom: "1px solid black" }}>
          Sign In
        </h2>
        <div className="entries">
          <h5
            htmlFor="exampleInputEmail1"
            className="form-label"
            style={{ paddingLeft: "30px" }}
          >
            Email address
          </h5>
          <input
            type="email"
            id="email"
            name="email"
            value={creds.email}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
          <h5
            htmlFor="password"
            className="form-label"
            style={{ paddingLeft: "30px" }}
          >
            Password
          </h5>
          <input
            type="password"
            id="password"
            name="password"
            value={creds.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ position: "absolute", bottom: "10px", left: "10px" }}
        >
          Submit
        </button>
      </form>
      <h3>{errMsg ? errMsg : ""}</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authstat: state.auth,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    authenticate: (creds) => dispatch(getCreds(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Login);
