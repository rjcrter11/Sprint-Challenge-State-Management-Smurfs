import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf, addSmurf } from "../actions";
import SmurfForm from "./SmurfForm";

const SmurfList = ({ smurfs, fetchingData, error, getSmurf, addSmurf }) => {
  // console.log(props);

  useEffect(() => {
    getSmurf();
  }, [getSmurf]);

  if (fetchingData) {
    return <div>Fetching your smurfs</div>;
  } else if (error) {
    return <div className="error"> {error} </div>;
  }

  return (
    <div className="main-container">
      {smurfs.map((smurf) => (
        <div className="structure-container">
          <div className="smurfs-container" key={smurf.id}>
            <h2>Name: {smurf.name} </h2>
            <p> Age: {smurf.age} </p>
            <p> Height: {smurf.height} </p>
          </div>
        </div>
      ))}
      <SmurfForm addSmurf={addSmurf} />
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

export default connect(mapStateToProps, { getSmurf, addSmurf })(SmurfList);
