require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const dayjs = require("dayjs");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "POST",
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Connection Error with MongoDB", err));

const ReservationSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  guests: Number,
  date: String,
  time: String,
});

const Reservation = mongoose.model("Reservation", ReservationSchema);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/reservations", async (req, res) => {
  const { name, email, phoneNumber, guests, date, time } = req.body;
  try {
    const formattedDate = dayjs(date).format("DD-MM-YYYY");
    const formattedTime = dayjs(time).format("HH:mm A");
    const newReservation = new Reservation({
      name,
      email,
      phoneNumber,
      guests,
      date: formattedDate,
      time: formattedTime,
    });
    await newReservation.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Reservation Confirmation",
      html: `<h1>Dear <strong>Guest</strong></h1>
      
      <h2>Thank you for your reservation at our Exotic Indian Eats!</h2>
      
      <h3><strong>Here are your reservation details:</strong></h3>
      <ul>
      <li>Name: <strong>${name}</strong></li>
      <li>Guests: <strong>${guests}</strong></li>
      <li>Date: <strong>${formattedDate}</strong></li>
      <li>Time: <strong>${formattedTime}</strong></li>
      <li>Contact Email: <strong>${email}</strong></li>
      <li>Phone Number: <strong>${phoneNumber}</strong></li>
      </ul>


      <p>If you need to make any changes or have any questions, feel free to reach out.  We look forward to serving you!</p>


      <p>Best regards,</p>  
      <p><strong>Exotic Indian Eats</strong></p>`,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Reservation confirmed!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
