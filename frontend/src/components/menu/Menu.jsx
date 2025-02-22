import MenuItem from "./MenuItem";
const Menu = () => {
  const menuItems = [
    {
      id: 0,
      itemName: "Chicken Biryani",
      itemPrice: 8.9,
      itemDescription:
        "A fragrant, spiced rice dish cooked with tender chicken, aromatic basmati rice, and a blend of exotic Indian spices.",
    },
    {
      id: 1,
      itemName: "Chicken Tikka Masala",
      itemPrice: 6.8,
      itemDescription:
        "Succulent chicken pieces marinated in yogurt and spices, grilled to perfection, and simmered in a rich, creamy tomato-based sauce.",
    },
    {
      id: 2,
      itemName: "Chicken 65 Biryani",
      itemPrice: 9.9,
      itemDescription:
        "A spicy and crispy twist on biryani, featuring deep-fried chicken 65 tossed with fragrant rice and bold South Indian spices.",
    },
    {
      id: 3,
      itemName: "Chicken Curry Special",
      itemPrice: 11.2,
      itemDescription:
        "A traditional Indian curry with slow-cooked chicken in a flavorful gravy made with tomatoes, onions, and a secret blend of spices.",
    },
    {
      id: 4,
      itemName: "Methi Chaman",
      itemPrice: 10.5,
      itemDescription:
        "A North Indian delicacy made with fresh fenugreek leaves and paneer, cooked in a creamy, mildly spiced spinach-based gravy.",
    },
  ];
  return (
    <section className='menu relative bg-coal md:py-56 py-32'>
      <div className='wrapper'>
        <div className='menu-content flex w-full md:flex-row flex-col relative'>
          <div className='menu-items relative z-20 xl:max-w-[500px] lg:h-fit h-full md:max-w-[440px] max-w-full w-full bg-white lg:px-8 px-4 lg:py-10 py-6'>
            {menuItems.map(({ id, itemName, itemPrice, itemDescription }) => (
              <MenuItem
                key={id}
                itemName={itemName}
                itemPrice={itemPrice}
                itemDescription={itemDescription}
              />
            ))}
          </div>
          <div className='menu-image lg:relative md:absolute w-full mediumLarge:-ml-16 mediumLarge:-mt-16 z-10'>
            <img
              src='/icons/angled-lines.svg'
              className='block absolute -left-28 -top-20'
              alt='angled-bars'
            />
            <img
              className='block w-full h-auto relative'
              src='/images/menu-image.png'
              alt='menu'
            />
          </div>
        </div>
      </div>
      <img
        src='/icons/angled-turn-lines.svg'
        className='mediumLarge:block hidden absolute z-10 right-28 bottom-48'
        alt='angled-bars'
      />
    </section>
  );
};
export default Menu;
