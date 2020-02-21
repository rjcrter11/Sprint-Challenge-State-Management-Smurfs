import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf, addSmurf, deleteSmurf } from "../actions";
import SmurfForm from "./SmurfForm";
import LoadingSpinner from "./LoadingSpinner";

const SmurfList = ({
  smurfs,
  fetchingData,
  error,
  getSmurf,
  addSmurf,
  deleteSmurf
}) => {
  // console.log(props);

  useEffect(() => {
    getSmurf();
  }, [getSmurf]);

  if (fetchingData) {
    return <LoadingSpinner />;
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
            <button onClick={() => deleteSmurf(smurf.id)}>Delete Smurf</button>
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

export default connect(mapStateToProps, { getSmurf, addSmurf, deleteSmurf })(
  SmurfList
);
