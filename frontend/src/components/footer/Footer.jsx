import "./footer.css";
const Footer = () => {
  const socialLinks = [
    { id: 0, icon: "/icons/facebook-icon.svg", href: "/" },
    { id: 1, icon: "/icons/twitter-icon.svg", href: "/" },
    { id: 2, icon: "/icons/instagram-icon.svg", href: "/" },
    { id: 3, icon: "/icons/youtube-icon.svg", href: "/" },
  ];
  const contactLinks = [
    {
      Menu: [
        {
          id: 0,
          text: "aaaaa",
        },
      ],
    },
    {
      "Find us": [
        {
          id: 0,
          text: "bbbbb",
        },
      ],
    },
  ];
  console.log(contactLinks);
  return (
    <footer className='footer bg-coal md:py-32 py-16'>
      <div className='wrapper'>
        <div className='footer-content'>
          <div className='footer-content__top flex'>
            <div className='footer-top__socials flex flex-col gap-6 max-w-[330px]'>
              <img
                className='block w-full h-auto xl:max-w-72 max-w-64'
                src='/images/exotic-logo-white.png'
                alt='exotic-logo-white'
              />
              <p className='text-white xl:text-lg text-md'>
                Exotic Indian Eats brings the bold, vibrant flavors of India to
                your plate. Enjoy authentic dishes crafted with the finest
                spices and ingredients for an unforgettable experience.
              </p>
              <span className='flex flex-row gap-4 items-center'>
                {socialLinks.map(({ id, icon, href }) => (
                  <a className='block' key={id} href={href}>
                    <img
                      className='block xl:h-6 xl:w-6'
                      src={icon}
                      alt='icon'
                    />
                  </a>
                ))}
              </span>
            </div>
            <div className='footer-top__links'></div>
          </div>
          <div className='footer-content__bot'></div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
