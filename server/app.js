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
app.use('/api', contactRoutes);
app.use('/api', mailRoutes);    

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
