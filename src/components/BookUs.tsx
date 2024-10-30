import { useState } from "react";

const BookUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventName: "",
    eventDate: "",
    eventTime: "",
    eventType: "",
    performanceRequests: "",
    location: "",
    additional: "",
  });
  const [submissionMessage, setSubmissionMessage] = useState(""); // State for submission message

  const performanceOptions = ["Festive Drumming", "Lion", "Dragon"];

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event: {
    target: { value: any; checked: any };
  }) => {
    const { value, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      performanceRequests: checked
        ? [...prevFormData.performanceRequests, value]
        : prevFormData.performanceRequests.filter(
            (request) => request !== value
          ),
    }));
  };

  const formatTime = (time) => {
    const [hour, minute] = time.split(":");
    const suffix = hour >= 12 ? "PM" : "AM";
    const formattedHour = (hour % 12 || 12).toString().padStart(2, "0");
    return `${formattedHour}:${minute} ${suffix}`;
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Reformat the date to "mm-dd-yyyy" format
    const [year, month, day] = formData.eventDate.split("-");
    const formattedDate = `${month}-${day}-${year}`;

    // Optional: Modify eventTime to 12-hour format
    const modifiedFormData = {
      ...formData,
      eventDate: formattedDate,
      eventTime: formatTime(formData.eventTime),
    };

    try {
      const response = await fetch("http://localhost:5002/api/book-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedFormData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Response body:", errorText);
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Response from server:", data);

      // Set success message
      setSubmissionMessage("Thank you! Your booking request has been submitted successfully.");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Set error message
      setSubmissionMessage("Oops! There was an error submitting your booking request. Please try again.");
    }
  };

  return (
    <div>
      <div className="book-us-container">
        <div className="book-us py-4">
          <h1>Book Us</h1>
          <form className="join-us-form-inputs" onSubmit={handleSubmit}>
            <div className="book-us-inputs gap-4 m-3">
              <p>Name:</p>
              <input
                className="book-us-form-inputs"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <p>Phone Number:</p>
              <input
                className="book-us-form-inputs"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="book-us-inputs gap-4 m-3">
              <p>Email:</p>
              <input
                className="book-us-form-inputs"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="book-us-inputs gap-4 m-3">
              <p>Event Name:</p>
              <input
                className="book-us-form-inputs"
                type="text"
                id="eventName"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="book-us-inputs gap-4 m-3">
              <p>Event Date:</p>
              <input
                className="book-us-form-inputs"
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
              <p>Event Time:</p>
              <input
                className="book-us-form-inputs"
                type="time"
                id="eventTime"
                name="eventTime"
                value={formData.eventTime}
                onChange={handleChange}
                required
              />
            </div>
            <div className="book-us-inputs gap-4 m-3">
              <p>Event Type:</p>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="Grand Opening">Grand Opening</option>
                <option value="Wedding Anniversary">Wedding Anniversary</option>
                <option value="Birthday">Birthday</option>
                <option value="New Years">New Years</option>
                <option value="Mid Autumn">Mid Autumn</option>
                <option value="Festival">Festival</option>
                <option value="School Event">School Event</option>
                <option value="Cultural Event">Cultural Event</option>
                <option value="Other/Specify in Additional Details">
                  Other/Specify in Additional Details
                </option>
              </select>
              <p>Performance Requests:</p>
              {performanceOptions.map((option) => (
                <label className="requests-labels" key={option}>
                  <input
                    type="checkbox"
                    name="performanceRequests"
                    value={option}
                    checked={formData.performanceRequests.includes(option)}
                    onChange={handleCheckboxChange}
                  />
                  {option}
                </label>
              ))}
            </div>
            <div className="book-us-inputs gap-4 m-3">
              <p>Address/Location:</p>
              <input
                className="book-us-form-inputs"
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="book-us-inputs gap-4 m-3">
              <p>Additional Details:</p>
              <input
                className="book-us-form-inputs"
                type="text"
                id="additional"
                name="additional"
                value={formData.additional}
                onChange={handleChange}
              />
            </div>
            <div className="join-us-submit mt-4">
              <button type="submit">Submit</button>
            </div>
          </form>
          {submissionMessage && <p className="submission-message pt-3">{submissionMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default BookUs;
