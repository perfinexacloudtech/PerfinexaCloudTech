// utils/mailService.js
require("dotenv").config();
const nodemailer = require("nodemailer");
const path = require("path");


const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS,
  },
});

const courseContent = {
  "Become a Certified Salesforce Developer": {
    description: "Learn CRM development, Apex, LWC, SOQL, automation & deployment required for Salesforce developer roles.",
    icon: "🔹"
  },
  "Master Java Full Stack Development": {
    description: "Master Java, Spring Boot, Microservices, APIs, SQL + React to become a complete full-stack developer.",
    icon: "☕"
  },
  "Become a MERN Stack Developer": {
    description: "Learn MongoDB, Express, React & Node. Build multiple projects with authentication, dashboards & deployment.",
    icon: "💻"
  },
  "Build Scalable Backend Applications with Django": {
    description: "Learn backend development with Django, REST APIs, Authentication & scalable architecture.",
    icon: "🐍"
  }
};

const sendOfferEmail = async (toEmail, name = "", course = "") => {
  try {
    const userName = name || "There";
    
    // Get specific course info or use a fallback if not found
    const courseInfo = courseContent[course] || {
      description: "Explore our various high-performance tech programs designed for your success.",
      icon: "🚀"
    };

    const mailOptions = {
      from: `"Perfinexa CloudTech" <perfinexacloudtech@gmail.com>`,
      to: toEmail,
      subject: `Registration Confirmed: ${selectedCourse} 🚀`,
      html: `
      <div style="font-family: Arial, sans-serif; background: #f7f7f7; padding: 20px;">
        <div style="max-width: 650px; margin: auto; background: #ffffff; padding: 25px; border-radius: 8px;">
          <h2 style="color: #333;">Hi ${userName}, 👋</h2>
          <p>Thank you for registering for the <strong>${selectedCourse}</strong> Masterclass at Perfinexa CloudTech!</p>

          <div style="background: #eef2ff; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e40af;">${courseInfo.icon} About Your Course</h3>
            <p style="margin-bottom: 0;">${courseInfo.description}</p>
          </div>

          <h3>🌟 Why Students Choose Us?</h3>
          <ul>
            <li>✅ Live Interactive Training (No Recorded Classes)</li>
            <li>✅ Build Real-World Projects for Your Resume</li>
            <li>✅ 1:1 Mentorship & Doubt-Solving Support</li>
          </ul>

          <p>We have attached the full <strong>Course Brochure</strong> to this email for your reference.</p>
          
          <p>Welcome to Perfinexa CloudTech! ✨</p>
          <p style="margin-top: 25px;">Warm Regards,<br><strong>Team Perfinexa CloudTech</strong></p>
        </div>
      </div>
      `,
      attachments: [
        {
          filename: "perfinexaCloudTech.pdf",
          path: path.join(__dirname, "../public/perfinexaCloudTech.pdf"),
          contentType: "application/pdf",
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("❌ Email Send Error:", error);
    throw error;
  }
};



// New function for contact form submissions
const sendContactEmail = async ({ firstName, lastName, email, subject = "No Subject", message }) => {
  try {
    console.log("Sending contact email with data:", { firstName, lastName, email, subject, message });

    const mailOptions = {
      from: `"Perfinexa CloudTech" <${'perfinexacloudtech@gmail.com'}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>This message was sent on ${new Date().toLocaleString()}</p>
      `,
    };

    console.log("Sending mail with options:", {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Message sent successfully:", info.messageId);

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("❌ Error sending contact email:", error);
    throw new Error("Failed to send message. Please try again later.");
  }
};


module.exports = { sendOfferEmail, sendContactEmail };
