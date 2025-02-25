const Recipes = () => {
  const recipesItems = [
    {
      id: 0,
      foodImg: "/images/bacon-omelet.png",
      title: "Bacon and Omelet with Veggies",
      text: "A savory blend of crispy bacon and fluffy omelet, served with a medley of fresh vegetables. This dish offers a delicious fusion of Western and Indian flavors, bringing a unique twist to your breakfast or brunch.",
      chefImage: "/images/chef-2.jpg",
      chefName: "Chef Arnold",
    },
    {
      id: 1,
      foodImg: "/images/chicken-veggies.png",
      title: "Chicken with Veggies on Grill",
      text: "Tender grilled chicken, marinated with aromatic Indian spices, served alongside perfectly charred vegetables. This dish is a perfect balance of smokey flavors and vibrant, fresh ingredients, ideal for a wholesome meal.",
      chefImage: "/images/chef-3.jpg",
      chefName: "Chef Farinca",
    },
    {
      id: 2,
      foodImg: "/images/poached-egg.png",
      title: "Poached Egg on English Breakfast",
      text: "A classic English breakfast reimagined with a delicate poached egg, accompanied by warm, seasoned toast and sautéed vegetables. It's a perfect harmony of rich textures, ideal for a satisfying start to the day.",
      chefImage: "/images/chef-1.jpg",
      chefName: "Chef Felisia",
    },
  ];
  return (
    <section className='recipes relative bg-coal md:py-44 py-28'>
      <img
        className='block absolute top-0 right-1 rotate-90 w-full h-auto md:max-w-52 max-w-32'
        src='/icons/angled-turn-lines.svg'
        alt='lines'
      />
      <div className='wrapper'>
        <div className='recipes-content'>
          <div className='text-center flex flex-col gap-4 items-center mb-20'>
            <img
              className='block w-full h-auto max-w-36'
              src='/images/recipes-text.png'
              alt='recipes'
            />
            <h2 className='font-semibold xl:text-4xl text-2xl text-white'>
              Tips & Tricks
            </h2>
          </div>
          <div className='recipes-cards flex lg:flex-row flex-col w-full gap-6 justify-center'>
            {recipesItems.map(
              ({ id, foodImg, title, text, chefName, chefImage }) => (
                <div
                  className='bg-darkGrey lg:mx-0 mx-auto md:max-w-[440px] group right-angle-cut md:hover:scale-105 transition-all duration-200 ease-in-out'
                  key={id}
                >
                  <img
                    className='block h-auto w-full'
                    src={foodImg}
                    alt='food'
                  />
                  <div className='text-white px-6 py-4'>
                    <h3 className='mb-4 xl:text-2xl text-xl group-hover:text-lightGold transition-all duration-200 ease-in-out'>
                      {title}
                    </h3>
                    <p className='xl:text-lg text-md mb-10'>{text}</p>
                    <div className='flex items-center gap-2'>
                      <img
                        className='block rounded-full w-full h-auto max-w-14'
                        src={chefImage}
                        alt='chef'
                      />
                      <h4 className='xl:text-xl text-lg'>by {chefName}</h4>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Recipes;
