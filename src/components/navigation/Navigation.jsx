import Link from "next/link";

const Navigation = () => {
  const navigationLinks = [
    { id: 0, href: "/", text: "Home" },
    { id: 1, href: "/menu", text: "Our Menu" },
    { id: 2, href: "/gallery", text: "Gallery" },
    { id: 3, href: "/about", text: "About Us" },
    { id: 4, href: "/more", text: "More" },
  ];
  return (
    <nav className='navigation fixed w-full top-0 left-0 z-[9999] py-[38px]'>
      <div className='wrapper'>
        <div className='navigation-content flex items-center justify-between'>
          <div className='navigation-image'>
            <img className='block' src='/images/exotic-logo.png' alt='logo' />
          </div>
          <ul className='navigation-links flex gap-[46px] text-xl font-medium'>
            {navigationLinks.map(({ id, href, text }) => (
              <li key={id}>
                <Link
                  className='block selection:text-gold hover:underline underline-offset-8 hover:text-gold transition-all duration-200 ease-in-out'
                  href={href}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
