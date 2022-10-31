import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import EditNoteAction from '../Store/Actions/NotesActions/EditNoteAction'

const EditNote = (props) => {
    const params = useParams()
    const Navigate = useNavigate(); 
    
    let id = params.id.toString();
    
    // return that note whose id is equal to that of params.id
    let requiredNote = props.notes.find( note => note._id===id) 
    const [note, setnote] = useState(requiredNote)
    

    const handleChange = (e) => {
        setnote({...note,
            [e.target.name]:e.target.value
        })
        // console.log(note)
    }

    const handleClick = (e) => {
        e.preventDefault();
        props.editNote(note,props.auth.token);
        props.showAlert("Note edited succesfully", "success");
        Navigate('/home')
    }

  return (
    <div>
        <h2 className="my-3">Add Note</h2>
      <form className="my-4">
        <div className="mb-3 texten">
          <h5 htmlFor="title" className="form-label">
            Title
          </h5>
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
        <div className="mb-3 texten">
          <h5 htmlFor="description" className="form-label">
            Description
          </h5>
        
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
          Update
        </button>
      </form>
    </div>
  )
}

const mapStateToProps=(state)=>{
    return{
        notes: state.NoteReducer.notes,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        editNote: (note,token) => (dispatch(EditNoteAction(note,token)))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditNote)