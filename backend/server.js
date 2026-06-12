require("dotenv").config();

console.log("EMAIL_USER =", process.env.EMAIL_USER);
console.log("EMAIL_PASS exists =", !!process.env.EMAIL_PASS);

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// =============================
// Middleware
// =============================
app.use(cors());
app.use(express.json());

// =============================
// Health Check Route
// =============================
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Backend Server Running 🚀"
    });
});

// =============================
// Contact Form Route
// =============================
app.post("/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Email Transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Mail Options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Portfolio Contact - ${name}`,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
            `
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({
            success: true,
            message: "Message sent successfully ✅"
        });

    } catch (error) {
        console.error("Email Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to send email ❌"
        });
    }
});

// =============================
// Server
// =============================
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});