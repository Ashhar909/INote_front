import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import EditNoteAction from '../Store/Actions/NotesActions/EditNoteAction'

const EditNote = (props) => {
    const params = useParams()
    const Navigate = useNavigate(); 

    let id = params.id.toString();
    // console.log(id)

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
        Navigate('/home')
        // console.log(props)
        // console.log(note);
    }

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
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={note.description}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          Edit
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
        editNote: (note) => (dispatch(EditNoteAction(note)))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditNote)