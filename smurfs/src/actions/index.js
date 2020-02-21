import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_ERROR = "FETCH_SMURF_ERROR";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_ERROR = "DELETE_SMURF_ERROR";

export const getSmurf = () => (dispatch) => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.error("Error fetching smurf", err);
      dispatch({ type: FETCH_SMURF_ERROR, payload: "Error fetching smurf" });
    });
};

export const addSmurf = (data) => (dispatch) => {
  dispatch({ type: ADD_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", data)
    .then((res) => {
      console.log(res);
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.error("Error adding smurf", err);
      dispatch({ type: ADD_SMURF_ERROR, payload: "Error adding smurf" });
    });
};

export const deleteSmurf = (id) => (dispatch) => {
  dispatch({ type: DELETE_SMURF_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.error("Error deleting smurf", err);
      dispatch({ type: DELETE_SMURF_ERROR, payload: "Error deleting smurf" });
    });
};
