import React from "react";
import { connect } from "react-redux";
import DeleteNoteAction from '../Store/Actions/NotesActions/DeleteNoteAction'
import {Link} from 'react-router-dom'

const NoteItem = (props) => {
  // console.log(props)
  const note = props.note;

  const handleClick = (e) => {
    e.preventDefault()
    props.deleteNote(note._id,props.auth.token)
    props.showAlert("Note Deleted Succesfully", "success")
  }
  return (
    <div className="card" style={{ height: "200px", overflow:"hidden"}}>
      <div className="card-header">
        Ash Note
        <i
          style={{ position: "absolute", right: "10px", top: "13px", cursor:"pointer" }}
          className="fa-solid fa-trash-can"
          onClick={handleClick}
        ></i>
      </div>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">
          {note.description.length>40 ? note.description.slice(0,40)+"...":note.description}
          <Link to={`/${note._id}`}>
          <i
            style={{ position: "absolute", right: "10px", bottom: "13px" , cursor:"pointer" }}
            className="fa-solid fa-pen-to-square"
          ></i>
          </Link>
          <Link to={`/view/${note._id}`}>
          <i 
          style={{ position: "absolute", left: "10px", bottom: "13px" , cursor:"pointer" }}
          className="fa-regular fa-eye"
          ></i>
          </Link>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth : state.auth
  }
}

const matchDispatchToProps = (dispatch) => {
  return{
    deleteNote: (id,token) => dispatch(DeleteNoteAction(id,token))
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(NoteItem);
