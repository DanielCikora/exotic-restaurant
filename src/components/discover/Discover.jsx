import "./discover.css";
const Discover = () => {
  const boxContent = [
    {
      id: 0,
      icon: "icons/middle-food-icon.svg",
      title: "Middle - East Food",
      paragraph:
        "Aromatic spices, grilled meats, creamy hummus, crispy falafel, shawarma, fresh pita, tabbouleh, and rich tahini. A mix of bold flavors and hearty, comforting dishes.",
      className: "box-a",
    },
    {
      icon: "icons/korean-food-icon.svg",
      id: 1,
      title: "Korean Food",
      paragraph:
        "Savory and spicy flavors, kimchi, Korean BBQ, bibimbap, tteokbokki, bulgogi, hearty stews, and fermented side dishes. A balance of sweet, sour, and umami goodness.",
      className: "box-b",
    },
    {
      icon: "icons/western-food-icon.svg",
      id: 2,
      title: "Western Food",
      paragraph:
        "Juicy steaks, gourmet burgers, cheesy pasta, fresh salads, crispy fries, roasted meats, and classic comfort dishes. A fusion of flavors from Europe and the Americas.",
      className: "box-b",
    },
    {
      icon: "icons/chinese-food-icon.svg",
      id: 3,
      title: "Chinese Food",
      paragraph:
        "Dumplings, stir-fried noodles, crispy spring rolls, savory Peking duck, sweet and sour chicken, hot pot, and rich sauces. A diverse cuisine full of deep flavors.",
      className: "box-a",
    },
  ];
  return (
    <section className='discover-section bg-coal min-h-dvh pt-24 pb-16'>
      <div className='wrapper'>
        <div className='flex flex-col items-center text-center xl:mb-[200px] md:mb-[100px] mb-[120px]'>
          <img
            className='block h-auto w-full xl:max-w-[200px] max-w-[112px] mb-8'
            src='/images/discover-text-image.png'
            alt='discover-cuisine'
          />
          <h2 className='text-white font-semibold xl:text-[46px] text-[36px] md:text-[28px]'>
            Our Specialist Cuisine
          </h2>
        </div>
        <div className='discover-content place-items-center w-full h-fit grid gap-5 md:grid-cols-2 grid-cols-1'>
          {boxContent.map(({ id, title, className, paragraph, icon }) => (
            <div
              key={id}
              className={`discover-box flex gap-4 bg-darkGrey lg:max-w-full md:max-w-[570px] w-full max-h-fit h-full sm:px-8 px-4 sm:py-6 py-2 ${className}`}
            >
              <div className='w-full sm:block hidden h-full md:max-w-[60px] xl:max-w-[100px]'>
                <img className='block w-full h-auto' src={icon} alt='food' />
              </div>
              <div className='flex flex-col sm:items-start items-center sm:gap-5 gap-2'>
                <h3 className='font-semibold text-lightGold xl:text-[32px] md:text-[22px] text-[18px]'>
                  {title}
                </h3>
                <div className='w-full sm:hidden block h-full max-w-20'>
                  <img className='block w-full h-auto' src={icon} alt='food' />
                </div>
                <p className='text-lightGrey sm:text-left text-center xl:text-[20px] md:text-[16px]'>
                  {paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
