import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../Store/Actions/Auth/AuthActions'

const SignedInLinks = (props) => {
    const Navigate = useNavigate()
    const handleClick = () => {
        props.logout();
        Navigate('/')
    }
  return (
    <div>
        <Link to="/">
        <button onClick = {handleClick} className="btn btn-outline-success mx-1">Logout</button>
        </Link>
    </div>
  )
}

const mapDispatchToprops = (dispatch) => {
    return{
        logout : () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToprops)(SignedInLinks);