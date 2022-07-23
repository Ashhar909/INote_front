const GetNotes = (token) => {
    return async (dispatch, getstate) => {
        const response = await fetch(
            "http://localhost:8000/api/notes/fetchallnotes",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "auth-token": token,
              },
            }
          );
          const json = await response.json()

          dispatch({
            type:"FETCH_ALL",
            notes: json
          })
    }
}

  


export default GetNotes;