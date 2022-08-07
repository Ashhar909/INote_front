import React from "react";
import {Link, useLocation} from 'react-router-dom';
import SignedOutLinks from "./Auth/SignedOutLinks";
import {connect} from 'react-redux'
import SignedInLinks from "./Auth/SignedInLinks";

function Navbar(props) {
    //* used for just making the link brighter in Navbar after we go to that route
    let location = useLocation(); 
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to = "/">
            INote
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {props.authStatus ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/home'?'active': ""}`} aria-current="page" to = "/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/about'?'active': ""}`} to = "/about">
                  About
                </Link>
              </li>
            </ul> : <div className="text-success">Welcomz</div> }   
          </div>
            {props.authStatus ? <SignedInLinks/> : <SignedOutLinks/>} 
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    authStatus: state.auth.success
  }
}

export default connect(mapStateToProps)(Navbar);
