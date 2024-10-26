import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

interface MilestoneLogProps {
  isPopupOpen: boolean;
  handleClosePopup: () => void;
  onSubmitNote: (note: string, date: string) => void;  // New prop to send the note back
}

const MilestoneLog: React.FC<MilestoneLogProps> = ({
  isPopupOpen,
  handleClosePopup,
  onSubmitNote
}) => {
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (!date) {
      const currentDate = new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD
      setDate(currentDate);
    }
  }, [date]);

  const handleNotesChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setNotes(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onSubmitNote(notes, date);  // Pass the note back to the parent on submit
    handlePopupCloseAndClear();  // Close the modal after submitting
  };

  const handlePopupCloseAndClear = () => {
    setNotes("");
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
                <h1>log your milestory</h1>
                <div className="d-flex justify-content-center align-items-center gap-4 m-3">
                  <p>notes:</p>
                  <input
                    type="text"
                    value={notes}
                    onChange={handleNotesChange}
                    placeholder="Enter note here"
                    style={{ width: "100%", height: "40px" }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center gap-4 m-3">
                  <p>Date:</p>
                  <input
                    type="date"
                    value={date}
                    onChange={handleDateChange}
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

export default MilestoneLog;
