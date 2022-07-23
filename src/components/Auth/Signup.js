import React, {useState} from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import { createUser } from '../../Store/Actions/Auth/AuthActions'

const Signup = (props) => {
  const Navigate = useNavigate()
  const [creds, setCreds] = useState({
    name:"",
    email:"",
    password:""
  })

  const handleChange = (e) => {
    setCreds({
      ...creds,[e.target.name]:e.target.value
    })
  }

  const handleSubmit = () => {
    props.createAccount(creds)
    Navigate('/home')
  }

  return (
    <div className='container my-4'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={creds.name}
            onChange={handleChange}
            required
          />
        </div>
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
            required
          />
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
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  )
}

const mapDispatchToprops = (dispatch) => {
  return{
    createAccount : (creds) => dispatch(createUser(creds))
  }
}

export default connect(null,mapDispatchToprops)(Signup)