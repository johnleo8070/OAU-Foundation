const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;
const router = express.Router();

// Middleware (Stable CORS & Subdirectory handling)
app.use((req, res, next) => {
    const origin = req.headers.origin;

    // Set origin dynamically to handle Credentials compatibility
    if (origin) {
        res.header("Access-Control-Allow-Origin", origin);
    } else {
        res.header("Access-Control-Allow-Origin", "*");
    }

    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");

    // Explicitly handle preflight for all paths
    if (req.method === "OPTIONS") {
        return res.status(204).end();
    }
    next();
});
app.use(express.json());

// Debug: Log all requests
app.use((req, res, next) => {
    console.log(`[DEBUG] ${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use STARTTLS
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false
    },
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 60000,
});

// Verify Transporter
transporter.verify((error, success) => {
    if (error) {
        console.error("❌ Transporter verification failed:", error.message);
    } else {
        console.log("✅ Server is ready to send emails");
    }
});

// --- ROUTES ---

router.post("/appointment", async (req, res) => {
    const { firstName, lastName, email, patientNumber, reasonForVisit } = req.body;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
        subject: "New Appointment Request - OAU FOUNDATION",
        text: `New Appointment Request:\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${patientNumber}\nReason: ${reasonForVisit}`,
    };
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Appointment request sent successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to send appointment request." });
    }
});

router.post("/quotation", async (req, res) => {
    const { name, email, phone, service, message } = req.body;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
        subject: `New Project Quotation Request - ${service}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
    };
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Quotation request sent successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to send quotation request." });
    }
});

router.post("/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
        subject: `OAU Foundation Contact Form: ${subject}`,
        text: `From: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to send message." });
    }
});

router.post("/newsletter", async (req, res) => {
    const { email } = req.body;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
        subject: "New Newsletter Subscription",
        text: `New subscriber: ${email}`,
    };
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Subscribed successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to subscribe." });
    }
});

router.post("/test", (req, res) => {
    console.log("[DEBUG] Test POST received:", req.body);
    res.status(200).json({ message: "Test POST successful!", received: req.body });
});

router.get("/status", (req, res) => {
    res.status(200).json({ status: "running", time: new Date() });
});

router.get("/", (req, res) => {
    res.send("OAU Foundation Server is running!");
});

// MOUNTING
// Handle every possible path variation for production reliability
app.use("/backend/api", router);
app.use("/backend", router);
app.use("/api", router);
app.use("/", router);

app.listen(port, () => {
    console.log(`✅ Server started on port ${port}`);
});
