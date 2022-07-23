const initialState = {
  notes:null
}


const NoteReducer = (state = initialState, action)=>{
  switch (action.type) {
    case "FETCH_ALL":
      return{
        ...state,
        notes:action.notes
      }
    case "ADD_NOTE":
      let newNotes = [...state.notes,action.note]
      // console.log(newNotes)
      return{
        ...state,
        notes: newNotes
      }
      
    case "DELETE_NOTE":
      let AfterDeletNotes = state.notes.filter((note)=>{
        return note._id !== action.id
      })
      // console.log(AfterDeleteNotes)
      return{
        ...state,
        notes:AfterDeletNotes
      }

    case "EDIT_NOTE" :
      // delete the previouly existing note with that id 
      let NotesafterDeletion = state.notes.filter((note)=>{
        return note._id !== action.note._id
      })
      // add the edited note from sction to the state
      let NotesAfterEditAdd = [...NotesafterDeletion,action.note]
      // console.log(newNotes)
      // console.log([newNotes,action.note])
      // return a note inside action here as a new list
      return{
        ...state,
        notes: NotesAfterEditAdd
      }
    default:
      return state;
  }
}

export default NoteReducer