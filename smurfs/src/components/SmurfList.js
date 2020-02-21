import React from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions";

const SmurfList = () => {
  return (
    <div className="main-container">
      <h2>Smurfs will go here</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingData: state.fetchingData
  };
};

export default connect(mapStateToProps, { getSmurf })(SmurfList);
