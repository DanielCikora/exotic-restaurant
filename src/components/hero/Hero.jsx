import CTA from "../ui/CTA";
const Hero = () => {
  return (
    <section className='hero relative pt-[205px]'>
      <img
        className='min-w-full min-h-dvh h-full object-cover absolute top-0 left-0 -z-10'
        src='/images/hero-image.png'
        alt='hero'
      />
      <div className='wrapper'>
        <div className='hero-content flex w-full justify-between'>
          <div className='hero-content__text max-w-[509px] w-full'>
            <img
              className='hero-text__image block mb-4'
              src='/images/welcome-image.png'
              alt='welcome'
            />
            <h1 className='hero-text__title text-[50px] font-semibold letter-spacing leading-[60px] pr-14 mb-6'>
              The Authentic South Indian Food
            </h1>
            <p className='hero-text__paragraph text-lightGrey text-[20px] mb-[57px]'>
              Experience the rich flavors and timeless traditions of South
              Indian cuisine, crafted to perfection with authentic spices and
              recipes.
            </p>
            <CTA
              className='bg-gold text-white hover:bg-white hover:text-black'
              href={"/more"}
              linkText='KNOW MORE'
            />
          </div>
          <div className='hero-content__image'>
            <img src='/images/biryani-image.png' alt='biryani' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
