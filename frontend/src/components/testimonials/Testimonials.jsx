"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    text: "Absolutely the best Indian food I've ever had! The flavors are so authentic, and every dish was made with love and care. The spices were perfectly balanced, and the aroma alone was enough to make my mouth water. I highly recommend trying their Chicken Biryani and Butter Naan!",
  },
  {
    id: 2,
    name: "Aisha Patel",
    text: "A wonderful experience from start to finish! The service was top-notch, with friendly staff who made us feel so welcome. The biryani was divine, with tender, juicy chicken and fragrant basmati rice infused with just the right amount of saffron and spices. Will definitely be visiting again soon!",
  },
  {
    id: 3,
    name: "Daniel Singh",
    text: "Loved the cozy atmosphere and the rich, deep flavors of the food. The Paneer Butter Masala was creamy and perfectly spiced, and the garlic naan was fresh out of the tandoor. It felt like a true taste of home, and I’ll be recommending this place to all my friends and family!",
  },
  {
    id: 4,
    name: "Sanjay Kumar",
    text: "The tandoori platter was a masterpiece! The chicken tikka was smoky and tender, the seekh kebabs were packed with flavor, and the chutneys complemented everything perfectly. The presentation was beautiful, and the staff made sure we had everything we needed. Highly recommend this place for an unforgettable Indian dining experience!",
  },
];
const Testimonials = () => {
  return (
    <section className='testimonials md:py-40 py-28 relative bg-ash'>
      <div className='wrapper relative '>
        <div className='flex flex-col items-center gap-4 mb-20'>
          <img
            className='block w-full h-auto max-w-52'
            src='/images/testimonials-text.png'
            alt='testimonials'
          />
          <h2 className='text-3xl font-semibold text-center text-white'>
            Customer Reviews
          </h2>
        </div>
        <div className='relative max-w-4xl mx-auto w-full px-5'>
          <button className='swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-10'>
            <img
              src='/icons/slider-arrow-left.svg'
              alt='Previous'
              className='block'
            />
          </button>
          <button className='swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-10'>
            <img
              src='/icons/slider-arrow-right.svg'
              alt='Next'
              className='block'
            />
          </button>
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            className='w-full'
          >
            {testimonials.map(({ id, name, text }) => (
              <SwiperSlide key={id}>
                <div className='flex flex-col items-center text-white md:p-6 p-2'>
                  <p className='md:text-xl text-lg italic mb-10'>"{text}"</p>
                  <h3 className='md:text-2xl text-xl font-semibold mb-6'>
                    {name}
                  </h3>
                  <img src='/icons/double-quotes.svg' alt='quotes' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
