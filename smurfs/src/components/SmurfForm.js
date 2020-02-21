import React, { useState } from "react";

const SmurfForm = (props) => {
  console.log("props from the smurf form: ", props);
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now()
  });
  console.log("log new smurf check: ", newSmurf);

  const handleChanges = (e) => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(newSmurf);
  };

  return (
    <div className="main-form-container">
      <div className="add-smurf-container">
        <h3>Add a Smurf</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-container name-input">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Choose a name"
              onChange={handleChanges}
            />
          </div>
          <div className="input-container age-input">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="text"
              name="age"
              placeholder="How old is your smurf?"
              onChange={handleChanges}
            />
          </div>
          <div className="input-container height-input">
            <label htmlFor="height">Height</label>
            <input
              id="height"
              type="text"
              name="height"
              placeholder="How old is your smurf?"
              onChange={handleChanges}
            />
          </div>
          <button className="newSmurf-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SmurfForm;
