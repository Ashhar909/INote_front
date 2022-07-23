const DeleteNoteAction = (id,token) => {
  return async (dispatch)=> {
    const response = await fetch(
      `http://localhost:8000/api/notes/deletenote/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token
        },
      }
    ); 
    const json = await response.json()
    console.log(json)

    dispatch({
    type: "DELETE_NOTE",
    id: id
    })
  }
}

export default DeleteNoteAction