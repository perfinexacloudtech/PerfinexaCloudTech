const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../utils/mailService');
const { body, validationResult } = require('express-validator');

const validateContact = [
  body('email').isEmail().withMessage('Valid email required').normalizeEmail(),
  body('firstName').trim().escape(),
  body('lastName').trim().escape(),
  body('message').trim().notEmpty().withMessage('Message required'),
  body('subject').optional().trim().escape()
];

router.post('/contact', validateContact, async (req, res) => {
  try {
    // ✅ Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const { firstName, lastName, email, subject, message } = req.body;

    await sendContactEmail({
      firstName,
      lastName,
      email,
      subject: subject || 'No Subject',
      message
    });

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send message. Please try again later.' 
    });
  }
});

module.exports = router;
