const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true
};

// Enable CORS + Preflight
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const contactRoutes = require('./routes/contact.route');
const mailRoutes = require('./routes/mail.route');
const { sendOfferEmail, sendContactEmail } = require('./utils/mailService');
app.use('/api', contactRoutes);
app.use('/api', mailRoutes);    

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});


app.post("/api/register", async (req, res) => {
  const { userName, userEmail, stream, year, description, course } = req.body;


  console.log("Registration Data Received:", {course });

  // Error Prevention: Check if email is present
  if (!userEmail) {
    return res.status(400).json({ success: false, error: "Recipient email is required." });
  }

  try {
    // 1. Send Welcome Email to Student
    await sendOfferEmail(userEmail, userName,course);

    // 2. Send Notification Email to Admin
    await sendContactEmail({
      firstName: userName,
      lastName: `(${stream} - ${year})`,
      email: userEmail,
      subject: `Masterclass Registration: ${course}`,
      message: `Reason: ${description}`
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});
module.exports = app;
