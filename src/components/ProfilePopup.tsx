import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

interface ProfilePopupProps {
  isPopupOpen: boolean;
  handleClosePopup: () => void;
  onAgeSubmit: (age: string) => void;
  onNamesSubmit: (name: string, babyName: string) => void;
}

const ProfilePopup: React.FC<ProfilePopupProps> = ({
  isPopupOpen,
  handleClosePopup,
  onAgeSubmit,
  onNamesSubmit
}) => {
    const [name, setName] = useState("");
    const [babyName, setBabyName] = useState("");
  const [age, setAge] = useState("");
  const [pedi, setPedi] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  const handleNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const handleBabyNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setBabyName(event.target.value);
  };

  const handleAgeChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setAge(event.target.value);
  };

  const handlePediChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPedi(event.target.value);
  };

  const handleContactChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setContact(event.target.value);
  };

  const handleAddressChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onAgeSubmit(age);
    onNamesSubmit(name, babyName);
    handleClosePopup(); // Close the modal after submitting
  };

  const handlePopupCloseAndClear = () => {
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
              <div className="milestory-profile-popup">
                <h1>Milestory Profile</h1>
                <div className="d-flex justify-content-center align-items-center gap-4 m-3"></div>
                <div className="d-flex justify-content-center align-items-center gap-4 m-3">
                  <p>Name:</p>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter your name"
                    style={{ width: "100%", height: "40px" }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center gap-4 m-3">
                  <p>Child's Name:</p>
                  <input
                    type="text"
                    value={babyName}
                    onChange={handleBabyNameChange}
                    placeholder="Enter your child's name"
                    style={{ width: "100%", height: "40px" }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center gap-4 m-3">
                  <p>Child's Date of Birth:</p>
                  <input
                    type="text"
                    value={age}
                    onChange={handleAgeChange}
                    placeholder="Enter date here"
                    style={{ width: "100%", height: "40px" }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center gap-4 m-3">
                  <p>Pediatrician:</p>
                  <input
                    type="text"
                    value={pedi}
                    onChange={handlePediChange}
                    placeholder="Enter pediatrician here"
                    style={{ width: "100%", height: "40px" }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center gap-4 m-3">
                  <p>Contact:</p>
                  <input
                    type="text"
                    value={contact}
                    onChange={handleContactChange}
                    placeholder="Enter contact here"
                    style={{ width: "100%", height: "40px" }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center gap-4 m-3">
                  <p>Address:</p>
                  <input
                    type="text"
                    value={address}
                    onChange={handleAddressChange}
                    placeholder="Enter address here"
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

export default ProfilePopup;
