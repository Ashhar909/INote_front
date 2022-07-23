import React, {useState} from "react";
import { useNavigate } from "react-router";
import {connect} from 'react-redux'
import { getCreds } from "../../Store/Actions/Auth/AuthActions";


const Login = (props) => {
  const Navigate = useNavigate(); 
  const [creds, setCreds] = useState({email:"", password:""})

  let errMsg = null;

  const handleSubmit = async (e) => {
    e.preventDefault()
    await props.authenticate(creds)
    Navigate('/home')
    // console.log(creds)
  }

  const handleChange=  (e) => {
    setCreds({...creds,[e.target.name]:e.target.value})
    // console.log(props)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={creds.email}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={creds.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
      <h3>{errMsg?errMsg:""}</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    aurhstat: state.auth
  }
}

const mapDispatchToprops = (dispatch) => {
  return{
    authenticate: (creds) => dispatch(getCreds(creds))
  }
}

export default connect(mapStateToProps,mapDispatchToprops)(Login);
