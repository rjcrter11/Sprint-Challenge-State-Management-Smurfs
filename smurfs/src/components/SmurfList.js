import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions";

const SmurfList = (props) => {
  console.log(props);

  useEffect(() => {
    props.getSmurf();
  }, []);

  return (
    <div className="main-container">
      {props.smurfs.map((smurf) => (
        <div className="structure-container">
          <div className="smurfs-container" key={smurf.id}>
            <h2>Name: {smurf.name} </h2>
            <p> Age: {smurf.age} </p>
            <p> Height: {smurf.height} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingData: state.fetchingData,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurf })(SmurfList);
