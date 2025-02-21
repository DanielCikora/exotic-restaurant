"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import "./reservation.css";
const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    guests: "",
    date: dayjs(),
    time: dayjs(),
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formattedDate = formData.date.format("DD-MM-YYYY");
    const formattedTime = formData.time.format("HH:mm A");
    try {
      await axios.post(
        "http://localhost:5000/reservations",
        {
          ...formData,
          date: formattedDate,
          time: formattedTime,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        guests: "",
        date: dayjs(),
        time: dayjs(),
      });
      toast.success(
        "Reservation Created Successfully. Please check your Email for confirmation."
      );
    } catch (error) {
      toast.error(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const currentDate = dayjs();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <section className='reservation bg-[#0B1315] py-32'>
        <div className='wrapper'>
          <div className='reservation-content flex md:flex-row flex-col justify-between gap-20'>
            <div className='reservation-text w-full'>
              <img
                className='block w-full h-auto max-w-52 mb-12'
                src='/images/reservation-text.png'
                alt='reservation-text'
              />
              <h2 className='text-4xl font-semibold text-white mb-10'>
                Feel the Flavor with Your Reservation
              </h2>
              <p className='text-lg text-white font-normal'>
                Experience the vibrant taste of India with each reservation. Our
                exotic menu blends the rich spices of traditional recipes with
                modern culinary techniques to deliver a dining experience like
                no other. Whether it's a cozy dinner or a celebration with
                friends, we'll ensure every moment is filled with flavor and
                joy. Reserve your table now, and let us welcome you to a world
                of unforgettable Indian cuisine.
              </p>
            </div>
            <form
              className='reservation-form w-full items-center text-white bg-gold py-10 px-12 flex flex-col gap-2'
              onSubmit={handleSubmit}
            >
              <h3 className='text-3xl font-semibold text-center mb-6'>
                Book Table
              </h3>
              <input
                className='bg-transparent w-full outline-none placeholder:text-white block border border-solid border-white py-4 px-4'
                type='text'
                name='name'
                placeholder='Reservation Name'
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className='bg-transparent w-full outline-none placeholder:text-white block border border-solid border-white py-4 px-4'
                type='text'
                name='email'
                placeholder='Email Address'
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className='bg-transparent w-full outline-none placeholder:text-white block border border-solid border-white py-4 px-4'
                type='tel'
                name='phoneNumber'
                placeholder='Phone Number'
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <input
                className='bg-transparent w-full outline-none placeholder:text-white block border border-solid border-white py-4 px-4'
                type='number'
                name='guests'
                placeholder='Number of Guests'
                value={formData.guests}
                onChange={handleChange}
              />
              <div className='flex sm:flex-row flex-col gap-2 mb-8'>
                <DatePicker
                  placeholder='Pick a Date'
                  value={formData.date}
                  minDate={currentDate}
                  onChange={(newDate) =>
                    setFormData({ ...formData, date: newDate })
                  }
                  sx={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "1px solid white",
                    width: "100%",
                    padding: "0",
                    "& .MuiInputBase-root": {
                      outline: "none",
                    },
                    "&:focus": {
                      outline: "none",
                      borderColor: "lightGold",
                    },
                    "& input": {
                      color: "white",
                      paddingLeft: "16px",
                    },
                  }}
                />
                <TimePicker
                  placeholder='Pick a Time'
                  timeSteps={15}
                  value={formData.time}
                  onChange={(newTime) =>
                    setFormData({ ...formData, time: newTime })
                  }
                  sx={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "1px solid white",
                    width: "100%",
                    "& input": {
                      color: "white",
                      paddingLeft: "16px",
                    },
                  }}
                />
              </div>
              <button
                className='p-3 w-full max-w-[200px] font-semibold bg-white text-lightGold'
                type='submit'
              >
                BOOK NOW
              </button>
            </form>
          </div>
        </div>
      </section>
    </LocalizationProvider>
  );
};
export default Reservation;
