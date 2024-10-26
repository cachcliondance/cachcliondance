import React, { useState } from "react";
import { Modal } from "react-bootstrap";

interface AddMilestoneProps {
  age: any;
  isPopupOpen: boolean;
  handleClosePopup: () => void;
  addMilestone: (milestone: any) => void;
}

const AddMilestone: React.FC<AddMilestoneProps> = ({
  age,
  isPopupOpen,
  handleClosePopup,
  addMilestone,
}) => {
  const [milestoneInputValue, setMilestoneInputValue] = useState("");
  const [date, setDate] = useState("");

  const handleMilestoneInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMilestoneInputValue(event.target.value);
  };

  const handleDateChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Create a new milestone object
    const newMilestone = {
      milestone: milestoneInputValue,
      date: date,
    };
    // Call the addMilestone function to update the parent
    addMilestone(newMilestone);
    // Clear the input fields and close the popup
    setMilestoneInputValue("");
    setDate("");
    handleClosePopup();
  };

  const handlePopupCloseAndClear = () => {
    setMilestoneInputValue("");
    setDate("");
    handleClosePopup();
  };

  return (
    <div>
      <Modal show={isPopupOpen} onHide={handlePopupCloseAndClear}>
        <div className="popup-container">
          <Modal.Body>
            <button className="close-button" onClick={handlePopupCloseAndClear}>
              &times;
            </button>
            <form onSubmit={handleSubmit}>
              <div className="log-popup">
                <h1>Add a custom Milestone</h1>
                <div className="d-flex justify-content-center align-items-center gap-4 m-3">
                  <p>age: {age} Month</p>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-4 m-3">
                  <p>milestone:</p>
                  <input
                    type="text"
                    value={milestoneInputValue}
                    onChange={handleMilestoneInputChange}
                    placeholder="Enter text here"
                    style={{ width: "100%", height: "40px" }}
                  />
                </div>
                <div className="log-submit mt-4">
                  <button type="submit">submit</button>
                </div>
              </div>
            </form>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default AddMilestone;
