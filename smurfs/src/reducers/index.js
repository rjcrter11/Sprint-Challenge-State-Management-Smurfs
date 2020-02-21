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
    default:
      return state;
  }
};
