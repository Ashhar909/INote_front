const EditNoteAction = (note,token) => {
  return async (dispatch) => {
      const response = await fetch(
        `http://localhost:8000/api/notes/updatenote/${note._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token
          },
          body:JSON.stringify(note)
        }
      ); 
      const json = await response.json()
      // console.log(json)
    
    
    dispatch({
      type: "EDIT_NOTE",
      note: json
    })

  }
  

}

export default EditNoteAction