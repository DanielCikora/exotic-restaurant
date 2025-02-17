import Link from "next/link";
import "./history.css";
const History = () => {
  return (
    <section className='history-section bg-ash min-h-dvh pt-[160px] pb-[100px]'>
      <div className='wrapper'>
        <div className='history-content lg:flex-row flex-col h-full flex items-center justify-between w-full'>
          <div className='flex sm:flex-row flex-col w-full lg:gap-6 gap-[20px] lg:p-0 p-[20px] bg-white'>
            <div className='chairs-table-image__container chairs-table-image__container--1'>
              <img
                className='history-image__tables-1 block w-full h-auto'
                src='/images/chairs-tables-image__1.png'
                alt='chairs-table-1'
              />
            </div>
            <div className='lg:-mt-12 chairs-table-image__container chairs-table-image__container--2'>
              <img
                className='history-image__tables-2 block w-full h-auto'
                src='/images/chairs-tables-image__2.png'
                alt='chairs-table-2'
              />
            </div>
          </div>
          <div className='lg:-ml-14 lg:mt-auto flex flex-col md:items-start items-center history-about bg-white px-6 py-6 max-w-full w-full h-full max-h-fit'>
            <img
              className='history-image__about-text block w-full h-auto xl:max-w-48 max-w-32 mb-6'
              src='/images/about-us-text.png'
              alt='about-us-text'
            />
            <h3 className='font-semibold xl:text-5xl md:text-4xl text-3xl  mb-4'>
              Our Story Makes History
            </h3>
            <p className='text-md mb-6'>
              Rooted in tradition, our journey began with a deep passion for
              Indian cuisine. We honor centuries-old recipes, blending aromatic
              spices with fresh ingredients to craft dishes that tell a story.
              Every bite embodies our rich heritage, bringing you an
              unforgettable culinary experience.
            </p>
            <Link
              className='text-xl text-nowrap flex flex-row group font-semibold text-lightGold gap-2 items-center transition-all duration-500 ease-in-out'
              href='/about'
            >
              Read More
              <img
                className='block w-full h-auto max-w-8 transition-transform duration-500 ease-in-out group-hover:translate-x-4'
                src='/icons/arrow-right.svg'
                alt='arrow-right'
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default History;
