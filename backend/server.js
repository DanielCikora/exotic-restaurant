require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
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
    const newReservation = new Reservation({
      name,
      email,
      phoneNumber,
      guests,
      date,
      time,
    });
    await newReservation.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Reservation Confirmation",
      text: `Hello ${name}, your reservation for ${guests} guests on ${date} at ${time} is confirmed.`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Reservation confirmed!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
app.get("/reservations", async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
