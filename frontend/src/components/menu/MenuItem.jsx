const MenuItem = ({ itemName, itemPrice, itemDescription }) => {
  const generateLines = () => {
    const lineCount = 80;
    return "-".repeat(lineCount);
  };
  return (
    <div className='menu-item mb-4'>
      <div className='menu-item__title overflow-hidden relative flex w-full justify-between'>
        <h3 className='xl:text-3xl md:text-2xl sm:text-xl text-lg text-black bg-white relative z-10 pr-1 font-semibold'>
          {itemName}
        </h3>
        <span className='xl:text-3xl md:text-2xl sm:text-lg text-md sm:block hidden absolute top-[20%] -right-0 text-lightGold'>
          {generateLines()}
        </span>
        <p className='xl:text-3xl md:text-2xl sm:text-xl text-lg text-lightGold font-normal bg-white relative z-10 pl-1'>
          $ {itemPrice}
        </p>
      </div>
      <p className='xl:text-lg md:text-md text-sm text-gray-500 font-normal'>
        {itemDescription}
      </p>
    </div>
  );
};
export default MenuItem;
