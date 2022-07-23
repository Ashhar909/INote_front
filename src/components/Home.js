import React , {useEffect} from "react";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import GetNotes from "../Store/Actions/NotesActions/GetNote";
import Notes from "./Notes";
// import {useNavigate} from 'react-router'

function Home(props) {
  const Navigate = useNavigate()
  // console.log(props)

  useEffect(() => {
    if(props.auth.token){
      props.getAll(props.auth.token)
    }
    else{
      Navigate('/')
    }
    // eslint-disable-next-line
  }, [])
  
  return (
      <div className="container">
        <Notes/>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getAll : (token) => dispatch(GetNotes(token))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
