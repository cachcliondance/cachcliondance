import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const PORT = 5002; // Ensure the server runs on a separate port

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS configuration
const corsOptions = {
  origin: ["http://localhost:5173", "https://www.cachcliondragon.org", "https://cachcliondragon.org"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"], 
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Serve static files from the Vite build directory
app.use(express.static(path.join(__dirname, 'dist')));

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS ,
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
    from: 'cachcliondance@gmail.com',
    to: 'mongkhanh75@yahoo.com', 
    subject: 'New Team Interest Submission - Join Us Form',
    text: `A new “Join Us” form submission has just come through filled out from the website. Here are the details of the potential team member:\n\nName: ${name}\nAge: ${age}\nEmail: ${email}\nPhone: ${phone}`,
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

  if (!name || !email || !phone || !eventName || !eventDate || !eventTime || !eventType || !performanceRequests || !location) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Send email
  const mailOptions = {
    from: 'cachcliondance@gmail.com',
    to: 'mongkhanh75@yahoo.com', 
    subject: 'New Event Book Submission',
    text: `A new event form submission has been filled out from the website. Here are the details of the requested event:
    \n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nEvent Date: ${eventDate}\nEvent Time: ${eventTime}\nEvent Type: ${eventType}\nPerformance Request(s): ${performanceRequests}\nLocation: ${location}\nAdditional: ${additional}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email." });
    }
    console.log("Email sent: " + info.response);
    res.json({ message: "Book Us form submitted successfully", data: req.body });
  });
});

// The "catchall" handler: for any request that doesn't match one above, send back the Vite app's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
