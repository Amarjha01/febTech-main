import nodemailer from "nodemailer";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();

// Multer setup for file upload
const storage = multer.memoryStorage(); // Store file in memory
const upload = multer({ storage });

export const career = async (req, res) => {
  try {
    const { full_name, email, mobile_number, apply_for } = req.body;
    const file = req.file; // ✅ Access file from Multer

    console.log("Received Form Data:", req.body);
    console.log("Received File:", file);

    if (!file) {
      return res.status(400).json({ success: false, message: "File is required" });
    }

    const transporter = nodemailer.createTransport({
      host: "us2.smtp.mailhostbox.com",
      port: 587,
      secure: false, // False for STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: '"Amar Jha" <donotreply@amarjha.tech>',
      to: "amar@febtech.in",
      subject: "New Career Application",
      text: `Name: ${full_name}
            Email: ${email}
            Phone No: ${mobile_number}
            Apply For: ${apply_for}`,
      attachments: [
        {
          filename: file.originalname, // ✅ File name
          content: file.buffer, // ✅ File content as buffer
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
         success: true, 
         message: "Application submitted successfully!" , 
         error: false
        });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong", error });
  }
};

// Export Multer Middleware
export const uploadMiddleware = upload.single("file");
