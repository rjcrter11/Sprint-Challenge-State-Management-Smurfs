import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_ERROR
} from "../actions";

const initialState = {
  fetchingData: false,
  error: "",
  smurfs: [
    {
      name: "Smurf1",
      age: 100,
      height: "7cm"
    },
    {
      name: "Smurf2",
      age: 66,
      height: "4cm"
    }
  ]
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        fetchingData: true,
        error: ""
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        smurfs: action.payload,
        error: ""
      };
    case FETCH_SMURF_ERROR:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};
