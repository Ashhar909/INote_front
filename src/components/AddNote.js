import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import AddNoteAction from "../Store/Actions/NotesActions/AddNoteAction";

const AddNote = (props) => {
  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  // we need not give any id as after we send a req to PUT the response sent is being sent to the frontend that has a id generated at the backend

  const handleClick = (e) => {
    e.preventDefault();
    props.addNote(note, props.auth.token);
    setnote({ title: "", description: "", tag: "" });
    // console.log(props)
  };
  const handleChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2 className="my-3">Add Note</h2>
      <form className="my-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="5"
            name="description"
            value={note.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const matchDispatchToProps = (dispatch) => {
  return {
    //* get these fn with a name of addNote inside props
    addNote: (note, token) => dispatch(AddNoteAction(note, token)),
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(AddNote);
