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
    description:
      "Learn CRM development, Apex, LWC, SOQL, automation & deployment required for Salesforce developer roles.",
    icon: "🔹",
  },
  "Master Java Full Stack Development": {
    description:
      "Master Java, Spring Boot, Microservices, APIs, SQL + React to become a complete full-stack developer.",
    icon: "☕",
  },
  "Become a MERN Stack Developer": {
    description:
      "Learn MongoDB, Express, React & Node. Build multiple projects with authentication, dashboards & deployment.",
    icon: "💻",
  },
  "Build Scalable Backend Applications with Django": {
    description:
      "Learn backend development with Django, REST APIs, Authentication & scalable architecture.",
    icon: "🐍",
  },
};

const sendOfferEmail = async (toEmail) => {
  try {
    const courseInfo = {
      description:
        "Explore our various high-performance tech programs designed for your success.",
      icon: "🚀",
    };

    const mailOptions = {
      from: `"Perfinexa CloudTech" <perfinexacloudtech@gmail.com>`,
      to: toEmail,
      subject: `Registration Confirmed: 🚀`,
      html: `
      <h2 style="color: #111827;">Hello 👋</h2> <p> Thank you for registering with <strong>Perfinexa CloudTech</strong>. We’re glad to have you with us! </p> <p> You will now receive important <strong>news, updates, announcements, and notifications</strong> related to our platform. Please keep an eye on your inbox so you don’t miss any updates. </p> <div style="background-color: #f1f5f9; padding: 15px; margin: 20px 0; border-radius: 6px;"> <p style="margin: 0;"> If you have any questions or need assistance, feel free to contact us anytime. </p> </div> <p style="margin-top: 25px;"> Warm Regards,<br> <strong>Team Perfinexa CloudTech</strong> </p> <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;"> <p style="font-size: 14px; color: #374151;"> 📞 <strong>Contact:</strong> +91 8767134732<br> 📍 <strong>Address:</strong> 12, 1st Floor, A-Wing, Mangalwari Complex, Sadar, Nagpur </p> <p style="font-size: 12px; color: #6b7280; margin-top: 20px;"> © 2026 Perfinexa CloudTech. All Rights Reserved. </p>
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

const sendContactEmail = async ({
  firstName,
  lastName,
  email,
  subject = "No Subject",
  message,
}) => {
  try {
    console.log("Sending contact email with data:", {
      firstName,
      lastName,
      email,
      subject,
      message,
    });

    const mailOptions = {
      from: `"Perfinexa CloudTech" <${"perfinexacloudtech@gmail.com"}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>This message was sent on ${new Date().toLocaleString()}</p>
      `,
    };

    console.log("Sending mail with options:", {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
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
