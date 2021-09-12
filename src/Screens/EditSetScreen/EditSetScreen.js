import React from "react";
import { useLocation } from "react-router";
import "./EditSetScreen.css";

const EditSetScreen = ({ data }) => {
  //grabbing setId from location param
  const location = useLocation();
  const { setId } = location.state;

  return (
    <div>
      <div className="screenHeader">
        <h1>Edit Set</h1>
      </div>

      <div className="editSetContainer">
        <div className="formContainer">
          <form>
            {/* <label for="title">title</label> */}
            <div className="formItem">
              <label for="text">
                <input type="text" id="title" name="title" placeholder="title" />
              </label>
            </div>

            <div className="formItem">
              <label>
                <input
                  type="textarea"
                  id="description"
                  name="description"
                  placeholder="description"
                />
              </label>
            </div>
          </form>
        </div>

        <div className="questionAddForm">
          <form>
            <input type="text" id="term" name="term" placeholder="term" />

            <input type="text" id="definition" name="definition" placeholder="definition" />
          </form>

          <div className="labels">
            <p className="inputLabel">Term</p>
            <p className="inputLabel"> Definition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSetScreen;
