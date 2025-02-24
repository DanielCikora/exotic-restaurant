"use client";
import { useState } from "react";
const Offers = () => {
  const [isCardHovered, setIsCardHovered] = useState(null);
  const handleHoverEnter = (index) => {
    setIsCardHovered(index);
  };
  const handleHoverLeave = () => {
    setIsCardHovered(null);
  };
  const cardsContent = [
    {
      id: 0,
      src: "/images/appetizer-image.png",
      title: "Appetizer Package",
      description: [
        "Samosa Chaat",
        "Gobi Manchurian",
        "Tandoori Chicken Wings",
      ],
      price: 90,
    },
    {
      id: 1,
      src: "/images/main-course-image.png",
      title: "Main Package",
      description: [
        "Paneer Butter Masala",
        "Chicken 65 Biryani",
        "Koju Chicken Curry",
      ],
      price: 120,
    },
    {
      id: 2,
      src: "/images/dessert-image.png",
      title: "Dessert Package",
      description: ["Gulab Jamun", "Rasmalai", "Mango Kulfi"],
      price: 80,
    },
  ];
  return (
    <section className='offers bg-coal relative py-32'>
      <img
        className='absolute top-0 left-0 block md:max-w-full max-w-32'
        src='/icons/angled-turn-lines.svg'
        alt='combo-offers'
      />
      <div className='wrapper'>
        <div className='offers-section'>
          <div className='flex flex-col gap-4 items-center md:mb-24 mb-20'>
            <img
              className='block w-full h-auto max-w-52'
              src='/images/combo-offers-text.png'
              alt='combo-offers'
            />
            <h2 className='sm:text-left text-center text-4xl font-semibold text-white'>
              Exquisite Offerings
            </h2>
          </div>
          <div className='offers-cards flex md:flex-row flex-col gap-6 w-full'>
            {cardsContent.map(({ id, title, description, price, src }) => (
              <div
                className={`cursor-pointer right-angle-cut offers-card h-full w-full ${
                  isCardHovered === id ? "offers-card--more" : ""
                }`}
                key={id}
                onMouseEnter={() => handleHoverEnter(id)}
                onMouseLeave={handleHoverLeave}
              >
                <img
                  className='food-image block h-auto'
                  src={src}
                  alt='food-image'
                />
                <div
                  className={`sm:px-4 px-2 overflow-hidden transition-all duration-500 ease-in-out absolute bottom-0 left-0 w-full bg-white ${
                    isCardHovered === id
                      ? "max-h-full py-4"
                      : "md:max-h-14 max-h-12 pt-2"
                  }`}
                >
                  <span className='flex sm:gap-2 gap-0 mb-4'>
                    <img
                      className='mr-4 sm:block hidden'
                      src='/icons/rectangle-slim.svg'
                      alt='rectangle-slim'
                    />
                    <h3 className='md:text-3xl text-2xl font-semibold'>
                      {title}
                    </h3>
                  </span>
                  <ul className='block md:text-xl text-lg text-matteGrey mb-2'>
                    {description.map((descriptionItem, index) => (
                      <li key={index}>{descriptionItem}</li>
                    ))}
                  </ul>
                  <span className='flex gap-2 items-center'>
                    <h4 className='md:text-3xl text-2xl font-semibold text-lightGold'>
                      ${price}
                    </h4>
                    <p className='text-secondGrey md:text-xl text-xl'>
                      /Per person
                    </p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Offers;
