import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const contact = async (req, res) => {
  try {
    const { full_name, email, mobile_number, message } = req.body;
    console.log('req body:', req.body)

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true, // False for STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: '"FebTech" <donotreply@febtech.in>',
      to: "rajat@febtech.in , nandani@febtech.in",
      subject: "New Enquary From ContactUs Page",
      text: `Name : ${full_name}
        Email : ${email}
        Phone No : ${mobile_number}
        Message : ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
      success: false,
    });
  }
};
