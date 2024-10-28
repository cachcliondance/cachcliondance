import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 5002; // Ensure the server runs on a separate port

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173", // Update this to match your React app's origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Enable set cookie
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "katrinango3388@gmail.com",
    pass: "kihayfpzobwtfzkd" ,
  },
});

// Define a route for the root path
app.get("/", (req, res) => {
  res.send("Welcome to the API!"); // Simple response for the root URL
});

// Route for JoinUs form submission
app.post("/api/join-us", (req, res) => {
  const { name, age, email, phone } = req.body;

  if (!name || !age || !email || !phone) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Send email
  const mailOptions = {
    from: email,
    to: 'cachcliondance@gmail.com', 
    subject: 'New CACHC Join Us Submission',
    text: `Name: ${name}\nAge: ${age}\nEmail: ${email}\nPhone: ${phone}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email." });
    }
    console.log("Email sent: " + info.response);
    res.json({ message: "Join Us form submitted successfully", data: req.body });
  });
});

// Route for BookUs form submission
app.post("/api/book-us", (req, res) => {
  const {
    name,
    email,
    phone,
    eventName,
    eventDate,
    eventTime,
    eventType,
    performanceRequests,
    location,
    additional,
  } = req.body;

  res.json({ message: "Book Us form submitted successfully", data: req.body });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
