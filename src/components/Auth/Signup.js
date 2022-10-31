import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { createUser } from "../../Store/Actions/Auth/AuthActions";

const Signup = (props) => {
  const Navigate = useNavigate();
  const [creds, setCreds] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.createAccount(creds);
    if (localStorage.getItem("token")) {
      props.showAlert("Signed up succesfully", "success");
      Navigate("/home");
    } else {
      props.showAlert("Enter Valid Credentials", "danger");
    }
  };

  return (
    <div className="container my-4 signup">
      <form onSubmit={handleSubmit}>
        <h2 className="my-3" style={{ borderBottom: "1px solid black" }}>
          Sign Up
        </h2>
        <div classname="entries">
        <div className="mb-3">
          <h5 htmlFor="name" className="form-label">
            Name
          </h5>
          <input
            type="text"
            id="name"
            name="name"
            value={creds.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <h5 htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </h5>
          <input
            type="email"
            id="email"
            name="email"
            value={creds.email}
            onChange={handleChange}
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <h5 htmlFor="password" className="form-label">
            Password
          </h5>
          <input
            type="password"
            id="password"
            name="password"
            value={creds.password}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

const mapDispatchToprops = (dispatch) => {
  return {
    createAccount: (creds) => dispatch(createUser(creds)),
  };
};

export default connect(null, mapDispatchToprops)(Signup);
