export const getCreds = (creds) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });
    const json = await response.json();
    console.log(json);
    if (!json.error) {
      dispatch({
        type: "LOGIN_SUCCESS",
        authtoken: json.authtoken,
      });
    } else {
      dispatch({
        type: "LOGIN_ERROR",
        err: json.error,
      });
    }
  };
};

export const createUser = (creds) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:8000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });
    const json = await response.json();
    console.log(json);
  };
};
