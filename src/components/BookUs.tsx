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
      const response = await fetch("http://localhost:5173/api/book-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data.message); // Handle success message
    } catch (error) {
      console.error("Error:", error); // Handle error
    }
  };

  return (
    <div>
      <div className="book-us-container pt-5 pb-5">
        <div className="book-us py-4">
          <h1>Book Us</h1>
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
              <p>Event Name:</p>
              <input
                type="text"
                id="eventName"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex gap-4 m-3">
              <p>Event Date:</p>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
              <p>Event Time:</p>
              <input
                type="time"
                id="eventTime"
                name="eventTime"
                value={formData.eventTime}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex gap-4 m-3">
              <p>Event Type:</p>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="option1">Grand Opening</option>
                <option value="option2">Wedding Anniversary</option>
                <option value="option3">Birthday</option>
                <option value="option4">New Years</option>
                <option value="option5">Mid Autumn</option>
                <option value="option6">Festival</option>
                <option value="option7">School Event</option>
                <option value="option8">Cultural Event</option>
                <option value="option9">
                  Other/Specify in Additional Details
                </option>
              </select>
            </div>
            <div className="d-flex gap-4 m-3">
              <p>Address/Location:</p>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex gap-4 m-3">
              <p>Additional Details:</p>
              <input
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
        </div>
      </div>
    </div>
  );
};

export default BookUs;
