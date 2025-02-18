"use client";
import { useState } from "react";
import axios from "axios";
const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    guests: "",
    date: "",
    time: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/reservations",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response: ", response);
      console.log("Data sent to BE: ", formData);

      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        guests: "",
        date: "",
        time: "",
      });
      console.log("Data sent to BE: ", formData);
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <section>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <input
            className='block border border-solid border-black rounded py-2 px-2'
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className='block border border-solid border-black rounded py-2 px-2'
            type='text'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className='block border border-solid border-black rounded py-2 px-2'
            type='tel'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <input
            className='block border border-solid border-black rounded py-2 px-2'
            type='number'
            name='guests'
            value={formData.guests}
            onChange={handleChange}
          />
          <input
            className='block border border-solid border-black rounded py-2 px-2'
            type='date'
            name='date'
            value={formData.date}
            onChange={handleChange}
          />
          <input
            className='block border border-solid border-black rounded py-2 px-2'
            type='time'
            name='time'
            value={formData.time}
            onChange={handleChange}
          />
          <button
            className='p-3 w-full max-w-[200px] font-semibold bg-white text-lightGold'
            type='submit'
          >
            BOOK NOW
          </button>
        </form>
      </div>
    </section>
  );
};
export default Reservation;
