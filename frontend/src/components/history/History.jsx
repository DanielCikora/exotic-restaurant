import "./history.css";
const History = () => {
  return (
    <section className='history-section bg-ash min-h-dvh py-5'>
      <div className='wrapper'>
        <div className='history-content flex w-full justify-between'>
          <div className='flex gap-4'>
            <div className='chairs-table-image__container chairs-table-image__container--1'>
              <img
                className='history-image__tables-1 block'
                src='/images/chairs-tables-image__1.png'
                alt='chairs-table-1'
              />
            </div>
            <div className='chairs-table-image__container chairs-table-image__container--2'>
              <img
                className='history-image__tables-2 block'
                src='/images/chairs-tables-image__2.png'
                alt='chairs-table-2'
              />
            </div>
          </div>
          <div className='history-about bg-white p-2'>
            <img
              className='history-image__about-text block w-full h-auto max-w-48'
              src='/images/about-us-text.png'
              alt='about-us-text'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default History;
