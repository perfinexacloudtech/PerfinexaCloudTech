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

const sendOfferEmail = async (toEmail, name = "") => {
  try {
    const userName = name ? name : "There";

    const mailOptions = {
      from: `"Perfinexa CloudTech" <${'perfinexacloudtech@gmail.com'}>`,
      to: toEmail,
      subject: "Welcome to Perfinexa CloudTech 🚀",
      html: `
      <div style="font-family: Arial, sans-serif; background: #f7f7f7; padding: 20px;">
        <div style="max-width: 650px; margin: auto; background: #ffffff; padding: 25px; border-radius: 8px;">

          <h2 style="color: #333;">Hi ${userName}, 👋</h2>

          <p>Thank you for showing interest in <strong>Perfinexa CloudTech</strong> — we’re excited to support your journey into the tech world!</p>

          <p>At Perfinexa, our mission is simple:<br>
          <strong>Help students become industry-ready professionals with practical skills, real projects, and strong career support.</strong></p>

          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">

          <h3>🌟 Why Students Choose Perfinexa CloudTech?</h3>
          <ul>
            <li>✅ Live Interactive Training (No Recorded Classes)</li>
            <li>✅ Build Real-World Projects for Your Resume</li>
            <li>✅ 1:1 Mentorship & Doubt-Solving Support</li>
            <li>✅ Placement Assistance & Interview Preparation</li>
            <li>✅ Strong Community + Career Guidance</li>
          </ul>

          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">

          <h3>📚 Courses You Can Explore</h3>

          <p><strong>🔹 Salesforce Development</strong><br>
          Learn CRM development, Apex, LWC, SOQL, automation & deployment required for Salesforce developer roles.</p>

          <p><strong>🔹 Java Full Stack Development</strong><br>
          Master Java, Spring Boot, Microservices, APIs, SQL + React to become a complete full-stack developer.</p>

          <p><strong>🔹 MERN Stack Development</strong><br>
          Learn MongoDB, Express, React & Node. Build multiple projects with authentication, dashboards & deployment.</p>

          <p><strong>🔹 Python Django Development</strong><br>
          Learn backend development with Django, REST APIs, Authentication & scalable architecture.</p>

          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">

          <h3>🎁 What’s Next?</h3>
          <p>We’ll be sharing:</p>
          <ul>
            <li>📍 Course Brochure + Roadmap</li>
            <li>📍 Beginner learning resources</li>
            <li>📍 Tips to start your tech career</li>
            <li>📍 Placement guidance & projects</li>
          </ul>

          <p>If you’d like to explore courses or speak to a counselor:</p>

          

          <p>We’re here to guide you at every step of your journey.<br>
          Welcome once again to Perfinexa CloudTech! ✨</p>

          <p style="margin-top: 25px;">Warm Regards,<br>
          <strong>Team Perfinexa CloudTech</strong></p>

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
    console.log("✅ Email sent:", info.messageId);
    return { success: true, messageId: info.messageId };

  } catch (error) {
    console.error("❌ Email Send Error:", error);
    throw new Error(`Failed to send email: ${error.message}`);
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
