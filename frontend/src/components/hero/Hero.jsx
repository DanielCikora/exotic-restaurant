import CTA from "../ui/CTA";
const Hero = () => {
  return (
    <section className='hero relative min-h-dvh md:pt-[205px] pt-[150px] pb-10'>
      <img
        className='min-w-full min-h-dvh h-full object-cover absolute top-0 left-0 -z-10'
        src='/images/hero-image.png'
        alt='hero'
      />
      <div className='wrapper'>
        <div className='hero-content flex w-full justify-between'>
          <div className='hero-content__text md:block flex md:text-left text-center flex-col items-center md:max-w-[509px] max-w-full'>
            <div>
              <img
                className='hero-text__image block mb-4 w-full h-auto md:max-w-full max-w-80'
                src='/images/welcome-image.png'
                alt='welcome'
              />
            </div>
            <h1 className='hero-text__title md:text-[50px] text-[36px] font-semibold md:leading-[60px] leading-[40px] md:pr-14 mb-6'>
              The Authentic South Indian Food
            </h1>
            <p className='hero-text__paragraph text-lightGrey md:text-[20px] text-[16px] mb-[57px]'>
              Experience the rich flavors and timeless traditions of South
              Indian cuisine, crafted to perfection with authentic spices and
              recipes.
            </p>
            <div className='hero-content__image md:hidden block w-full h-auto max-w-64 mb-8'>
              <img src='/images/biryani-image.png' alt='biryani' />
            </div>
            <CTA
              className='bg-gold text-white hover:bg-white hover:text-black sm:w-fit w-full'
              href={"/more"}
              linkText='KNOW MORE'
            />
          </div>
          <div className='hero-content__image md:block hidden'>
            <img src='/images/biryani-image.png' alt='biryani' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
