import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";


const ViewNote = (props) => {
    const params = useParams();
    const id =params.id.toString();
    const note = props.notes.find((note)=>note._id === id)
  return (
    <div className="container my-3">
    {/* give a button to go to the edit page from here  */}
    {/* <button onClick={handle}>hey</button>  */}
      <div className="card">
        <div className="card-header">
        <h3>{note.title}</h3>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{note.description}</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    return{
        auth: state.auth.token,
        notes: state.NoteReducer.notes
    }
}

export default connect(mapStateToProps)(ViewNote);
