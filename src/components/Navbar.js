import React from "react";
import {Link} from 'react-router-dom';
import SignedOutLinks from "./Auth/SignedOutLinks";
import {connect} from 'react-redux'
import SignedInLinks from "./Auth/SignedInLinks";

function Navbar(props) {
    //* used for just making the link brighter in Navbar after we go to that route
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to = "/home">
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
          
            {props.authStatus ? <SignedInLinks showAlert = {props.showAlert}/> : <SignedOutLinks/>} 
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
