const EditNoteAction = (note,token) => {
  return async (dispatch) => {
      const response = await fetch(
        `http://localhost:8000/api/notes/updatenote/${note._id}`,{
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token
          },
          body:JSON.stringify(note)
        }
      )
      .then(()=> {
        console.log("done")
      })
      .catch((err)=>{
        console.log(err.msg)
      })

      const json = response.json()
    dispatch({
      type: "EDIT_NOTE",
      note: json
    })

  }
  

}

export default EditNoteAction