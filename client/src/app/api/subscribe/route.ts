import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Create transporter (you'll need to configure with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    })

    // Email to student with class information and PDF
    const studentMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to CloudTech - Your Learning Journey Starts Here! 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0d318d, #772e98); padding: 30px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 28px;">Welcome to CloudTech! 🎉</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">Your Tech Journey Starts Now</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #0d318d; margin-bottom: 20px;">Thank you for subscribing!</h2>
            
            <p>Hi there! 👋</p>
            
            <p>Welcome to the CloudTech family! We're excited to have you on board for your tech transformation journey.</p>
            
            <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #deae40;">
              <h3 style="color: #772e98; margin-top: 0;">🎓 Our Available Courses:</h3>
              <ul style="color: #333; line-height: 1.8;">
                <li><strong>🧭 Salesforce Development</strong> - Master CRM, Apex, and Lightning Web Components</li>
                <li><strong>💻 Java Full Stack Development</strong> - Build powerful web applications with Java, Spring Boot & React</li>
                <li><strong>🌐 MERN Stack Development</strong> - Create modern web apps with React, Node.js, Express & MongoDB</li>
                <li><strong>🐍 Python Django</strong> - Develop robust web applications with Python and Django framework</li>
              </ul>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #0d318d;">
              <h3 style="color: #0d318d; margin-top: 0;">✨ What You Get:</h3>
              <ul style="color: #333; line-height: 1.8;">
                <li>💼 <strong>Live Project Experience</strong> - Work on real client projects</li>
                <li>🧑‍🏫 <strong>Expert Mentorship</strong> - Learn from industry professionals</li>
                <li>🏆 <strong>Certification</strong> - Get recognized credentials</li>
                <li>🤝 <strong>Placement Support</strong> - Career guidance and job referrals</li>
                <li>💬 <strong>Community Access</strong> - Connect with developers and recruiters</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUt2aELXj23WCxr8pbreUI3S4naAkWbNG97zJbhX_PvOhL8Q/viewform?usp=header" 
                 style="background: linear-gradient(to right, #0d318d, #772e98); color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; display: inline-block;">
                👉 Enroll Now - Start Your Journey!
              </a>
            </div>
            
            <p style="color: #666; font-size: 14px; margin-top: 30px;">
              <strong>Next Steps:</strong><br>
              1. Check your email regularly for course updates<br>
              2. Join our community for networking<br>
              3. Complete the enrollment form when ready<br>
              4. Start your transformation journey! 🚀
            </p>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #772e98; font-weight: bold;">Ready to build your future?</p>
              <p style="color: #666; font-size: 14px;">Follow us for updates and tech tips!</p>
            </div>
          </div>
          
          <div style="background: #0d318d; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">© 2024 CloudTech. Shaping India's Tech Future.</p>
          </div>
        </div>
      `,
    }

    // Email to admin with student information
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: 'New CloudTech Subscription - Student Information',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0d318d, #772e98); padding: 20px; color: white;">
            <h2 style="margin: 0;">New Student Subscription 📧</h2>
          </div>
          
          <div style="padding: 20px; background: #f8f9fa;">
            <h3 style="color: #0d318d;">Student Information:</h3>
            <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #deae40;">
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subscription Date:</strong> ${new Date().toLocaleString()}</p>
              <p><strong>Source:</strong> CloudTech Website Newsletter</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px;">
              <p style="margin: 0; color: #0d318d;"><strong>Action Required:</strong></p>
              <p style="margin: 5px 0 0 0;">Follow up with this student about course enrollment and provide additional support if needed.</p>
            </div>
          </div>
        </div>
      `,
    }

    // Send emails
    await transporter.sendMail(studentMailOptions)
    await transporter.sendMail(adminMailOptions)

    return NextResponse.json({ 
      success: true, 
      message: 'Subscription successful! Check your email for course information.' 
    })

  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to process subscription. Please try again.' },
      { status: 500 }
    )
  }
}
