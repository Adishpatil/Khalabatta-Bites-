// ===== EMAIL SERVICE — Nodemailer Configuration =====
const nodemailer = require('nodemailer');

/**
 * Creates a Nodemailer transporter using environment variables.
 * Supports Gmail, Outlook, or any SMTP service.
 * Configure EMAIL_USER and EMAIL_PASS in your .env file.
 */
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail', // Change to 'outlook', 'yahoo', etc. as needed
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

/**
 * Sends a contact form email with a professionally formatted HTML template.
 * @param {Object} contactData - { name, phone, email, message }
 * @returns {Promise<Object>} - Nodemailer send result
 */
const sendContactEmail = async ({ name, phone, email, message }) => {
  const transporter = createTransporter();

  const htmlTemplate = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0C0705; border: 1px solid #2a1a10; border-radius: 16px; overflow: hidden;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #D4943A, #C17A28); padding: 30px; text-align: center;">
        <h1 style="color: #0C0705; margin: 0; font-size: 24px; font-weight: 800;">Khalbatta Bites</h1>
        <p style="color: #0C0705; margin: 5px 0 0; font-size: 14px; opacity: 0.8;">New Contact Form Submission</p>
      </div>
      
      <!-- Body -->
      <div style="padding: 30px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #2a1a10; color: #D4943A; font-weight: 600; width: 120px;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #2a1a10; color: #F5E6D0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #2a1a10; color: #D4943A; font-weight: 600;">Phone</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #2a1a10; color: #F5E6D0;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #2a1a10; color: #D4943A; font-weight: 600;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #2a1a10; color: #F5E6D0;">
              <a href="mailto:${email}" style="color: #E8B86D; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #D4943A; font-weight: 600; vertical-align: top;">Message</td>
            <td style="padding: 12px 0; color: #F5E6D0; line-height: 1.6;">${message}</td>
          </tr>
        </table>
      </div>
      
      <!-- Footer -->
      <div style="padding: 20px 30px; background: #110A07; text-align: center; border-top: 1px solid #2a1a10;">
        <p style="color: #6D5A4A; font-size: 12px; margin: 0;">This email was sent from the Khalbatta Bites website contact form.</p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"Khalbatta Bites Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
    subject: `New Contact: ${name} — Khalbatta Bites`,
    html: htmlTemplate,
    replyTo: email,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendContactEmail };
