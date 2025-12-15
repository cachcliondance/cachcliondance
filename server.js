import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";
// import mongoose from 'mongoose';

dotenv.config();
const app = express();
const PORT = 5002; // Ensure the server runs on a separate port

// mongoose.connect("mongodb://localhost:27017/demo", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const imageSchema = new mongoose.Schema({
//   originalName: String,
//   storedName: String,
//   url: String,
//   uploadedAt: { type: Date, default: Date.now }
// });

// const Image = mongoose.model('Image', imageSchema);

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

    res.json({ message: "Gallery cleared successfully" });
  });
});

// Route to delete a specific photo
app.delete("/api/photo/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(uploadsDir, filename);

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Failed to delete file: ${filePath}`, err);
      return res.status(500).json({ error: "Failed to delete file." });
    }
    res.json({ message: "File deleted successfully." });
  });
});

// app.delete("/api/photo/:filename", async (req, res) => {
//   const filename = req.params.filename;
//   const filePath = path.join(uploadsDir, filename);

//   try {
//     // Delete the file from the server
//     await fs.unlink(filePath);
//     // Delete the metadata from the database
//     await Image.deleteOne({ storedName: filename });
//     res.json({ message: "File deleted successfully." });
//   } catch (error) {
//     console.error(`Failed to delete file: ${filePath}`, error);
//     res.status(500).json({ error: "Failed to delete file." });
//   }
// });


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

  const fileDetails = req.files.map(file => ({
    originalName: file.originalname,
    storedName: file.filename,
    url: `/uploads/${file.filename}`,
  }));

  console.log("Files uploaded:", req.files);
  res.json({ message: "Files uploaded successfully", files: fileDetails });
});

// app.post("/api/upload", upload.array("photos", 10), async (req, res) => {
//   if (!req.files || req.files.length === 0) {
//     return res.status(400).json({ error: "No files uploaded." });
//   }

//   const fileDetails = req.files.map(file => ({
//     originalName: file.originalname,
//     storedName: file.filename,
//     url: `/uploads/${file.filename}`
//   }));

//   try {
//     // Save metadata to the database
//     const savedFiles = await Image.insertMany(fileDetails);
//     res.json({ message: "Files uploaded successfully", files: savedFiles });
//   } catch (error) {
//     console.error("Error saving to database:", error);
//     res.status(500).json({ error: "Failed to save file metadata." });
//   }
// });

app.get("/api/uploads", (req, res) => {
  const uploadsDir = path.join(__dirname, "/uploads");

  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      console.error("Failed to read uploads directory:", err);
      return res.status(500).json({ error: "Failed to retrieve uploads." });
    }

    const fileDetails = files.map((file) => ({
      id: file,
      url: `/uploads/${file}`,
    }));

    res.json({ files: fileDetails });
  });
});

// app.get("/api/uploads", async (req, res) => {
//   try {
//     const files = await Image.find();
//     res.json({ files });
//   } catch (error) {
//     console.error("Error retrieving files:", error);
//     res.status(500).json({ error: "Failed to retrieve uploads." });
//   }
// });

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
    to: "katrinango3388@gmail.com",
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
