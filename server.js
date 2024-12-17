import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const PORT = 5002; // Ensure the server runs on a separate port

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS configuration
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://www.cachcliondragon.org",
    "https://cachcliondragon.org",
    "https://cachcphotouploader.netlify.app",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Serve static files from the Vite build directory
app.use(express.static(path.join(__dirname, "dist")));
console.log(__dirname + "/uploads");

// Function to clear files in the uploads folder
function clearUploadsFolder() {
  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      console.error("Failed to read uploads folder:", err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(uploadsDir, file);
      fs.unlink(filePath, (unlinkErr) => {
        if (unlinkErr) {
          console.error(`Failed to delete file: ${filePath}`, unlinkErr);
        } else {
          console.log(`Deleted file: ${filePath}`);
        }
      });
    });
  });
}

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "/uploads")); // Save files in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Rename file to avoid collisions
  },
});
const upload = multer({ storage });

// Route to delete all files in the uploads folder
app.delete("/api/clear-uploads", (req, res) => {
  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read uploads folder" });
    }

    files.forEach((file) => {
      const filePath = path.join(uploadsDir, file);
      fs.unlink(filePath, (unlinkErr) => {
        if (unlinkErr) {
          console.error(`Failed to delete file: ${filePath}`, unlinkErr);
        }
      });
    });

    res.json({ message: "Uploads folder cleared successfully" });
  });
});

// Create the uploads directory if it doesn't exist
import fs from "fs";
const uploadsDir = path.join(__dirname, "/uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Route to handle file uploads
app.post("/api/upload", upload.array("photos", 10), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "No files uploaded." });
  }

  console.log("Files uploaded:", req.files);
  res.json({ message: "Files uploaded successfully" });
});

// Route to serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get('/api/photos', (req, res) => {
  const uploadsDir = path.join(__dirname, '/uploads');
  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read upload directory" });
    }

    // Map files to their accessible URLs
    const fileUrls = files.map(file => `/uploads/${file}`);
    res.json({ photos: fileUrls });
  });
});

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
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
    from: "cachcliondance@gmail.com",
    to: "pvo15@yahoo.com",
    subject: "New Team Interest Submission - Join Us Form",
    text: `A new “Join Us” form submission has just come through filled out from the website. Here are the details of the potential team member:\n\nName: ${name}\nAge: ${age}\nEmail: ${email}\nPhone: ${phone}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email." });
    }
    console.log("Email sent: " + info.response);
    res.json({
      message: "Join Us form submitted successfully",
      data: req.body,
    });
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

  if (
    !name ||
    !email ||
    !phone ||
    !eventName ||
    !eventDate ||
    !eventTime ||
    !eventType ||
    !performanceRequests ||
    !location
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Send email
  const mailOptions = {
    from: "cachcliondance@gmail.com",
    to: "pvo15@yahoo.com",
    subject: "New Event Book Submission",
    text: `A new event form submission has been filled out from the website. Here are the details of the requested event:
    \n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nEvent Date: ${eventDate}\nEvent Time: ${eventTime}\nEvent Type: ${eventType}\nPerformance Request(s): ${performanceRequests}\nLocation: ${location}\nAdditional: ${additional}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email." });
    }
    console.log("Email sent: " + info.response);
    res.json({
      message: "Book Us form submitted successfully",
      data: req.body,
    });
  });
});

// The "catchall" handler: for any request that doesn't match one above, send back the Vite app's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
