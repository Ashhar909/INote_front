import React from "react";
import { connect } from "react-redux";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
import Quote from "./Quote";

function Notes(props) {
  let notelist = null
  if(props.notes){
    notelist = props.notes.map((note) => {
    return (
      <div key={note._id} className="col-md-3 my-3">
        <NoteItem note={note} showAlert={props.showAlert}/>
      </div>
    )
  })}
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-8"><AddNote showAlert = {props.showAlert}/></div>
        <div className="col-4"><Quote/></div>
      </div>
      <div className="row">
        <h2>Your Notes</h2>
        {props.notes? notelist : <div>Loading...</div>}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.NoteReducer.notes
  };
};

export default connect(mapStateToProps)(Notes);
