import { useState } from "react";
import joinusimg1 from "../assets/joinus_1.jpg";
import joinusimg2 from "../assets/joinus_2.jpg";
import joinusimg3 from "../assets/joinus_3.jpg";
import joinusimg4 from "../assets/joinus_4.jpg";

const imageUrls = [joinusimg1, joinusimg2, joinusimg3, joinusimg4];
// const apiUrl = import.meta.env.REACT_APP_API_URL

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  });
  const [submissionMessage, setSubmissionMessage] = useState(""); // State for submission message

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      console.log("Posting to:", "/api/join-us");

      const response = await fetch("/api/join-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Log the response to debug
        const errorText = await response.text(); // Get the error response body
        console.error("Response body:", errorText); // Log the error response body
        throw new Error("Network response was not ok");
      }

      const data = await response.json(); // This line may throw an error if the response is not valid JSON
      console.log("Response from server:", data);
      // Set success message
      setSubmissionMessage("Thank you! Your form has been submitted successfully.");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Set error message
      setSubmissionMessage("Oops! There was an error submitting your form. Please try again.");
    }
  };

  return (
    <div>
      <div className="join-us container-fluid">
        <div className="row">
          <div className="join-us-form col-lg-6 pt-3 pb-3">
            <h1>Join Us</h1>
            <form className="join-us-form-inputs" onSubmit={handleSubmit}>
              <div className="d-flex gap-4 m-3">
                <p>Name:</p>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-flex gap-4 m-3">
                <p>Age:</p>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-flex gap-4 m-3">
                <p>Email:</p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-flex gap-4 m-3">
                <p>Phone Number:</p>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="join-us-submit mt-4">
                <button type="submit">Submit</button>
              </div>
            </form>
            {submissionMessage && <p className="submission-message pt-3">{submissionMessage}</p>}
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center p-0">
            <div className="image-grid">
              {imageUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Image ${index + 1}`}
                  className="grid-image"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
