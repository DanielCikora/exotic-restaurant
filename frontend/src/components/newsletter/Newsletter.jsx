"use client";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
const Newsletter = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();
    const formattedEmail = {
      newsletterEmail: newsletterEmail,
    };
    try {
      await axios.post(
        "https://exotic-restaurant-tzp1.vercel.app/newsletter",
        formattedEmail,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        console.log(formattedEmail)
      );
      setNewsletterEmail("");
      toast.success("Successfully Subscribed to Newspaper!");
    } catch (error) {
      toast.error("Error Submitting Email to Newspaper: ", error);
    }
  };
  return (
    <section className='bg-ash md:py-36 py-24 relative'>
      <img
        className='block lg:opacity-100 md:opacity-50 absolute top-0 md:left-0 left-1 w-full h-auto md:max-w-36 max-w-24'
        src='/icons/angled-turn-lines.svg'
        alt='angled-lines'
      />
      <div className='wrapper'>
        <div className='newsletter-content flex md:flex-row justify-between items-center flex-col w-full lg:gap-28 md:gap-16 gap-8'>
          <div className='flex flex-col sm:items-start items-center gap-4 w-full max-w-fit'>
            <img
              className='block w-full h-auto max-w-44'
              src='/images/newsletter-text.png'
              alt='newsletter-text'
            />
            <h2 className='xl:text-4xl md:text-3xl text-3xl text-white font-semibold'>
              Subscribe Now!
            </h2>
          </div>
          <div className='flex md:flex-row flex-col gap-6 w-full max-h-fit max-w-[800px] items-center'>
            <input
              className='block text-white placeholder:text-white py-4 px-4 border bg-transparent border-solid border-white w-full'
              type='email'
              name='email'
              onChange={(event) => setNewsletterEmail(event.target.value)}
              value={newsletterEmail}
              placeholder='Your Email'
            />
            <button
              className='block w-full font-semibold sm:max-w-[200px] max-w-full py-4 px-4 bg-lightGold hover:bg-white hover:text-black text-white transition-all duration-200 ease-in-out'
              type='submit'
              onClick={handleNewsletterSubmit}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
