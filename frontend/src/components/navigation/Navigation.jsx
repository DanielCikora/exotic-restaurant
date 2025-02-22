"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import "../../styles/navigation.css";
const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const toggleMenuOpen = () => {
    setMenuOpen((prev) => {
      const newState = !prev;
      document.body.style.overflowY = newState ? "hidden" : "scroll";
      return newState;
    });
  };
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };
  const handleLinkClick = () => {
    setMenuOpen(false);
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  };
  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navigationLinks = [
    { id: 0, href: "/", text: "Home" },
    { id: 1, href: "/menu", text: "Our Menu" },
    { id: 2, href: "/gallery", text: "Gallery" },
    { id: 3, href: "/about", text: "About Us" },
    { id: 4, href: "/more", text: "More" },
  ];
  return (
    <nav
      className={`navigation fixed w-full top-0 left-0 z-[9999] transition-all duration-300 ease-in-out ${
        isScrolled
          ? "md:py-[4px] py-[4px] bg-white bg-opacity-90"
          : "md:py-[38px] py-[4px] md:bg-transparent"
      }`}
    >
      <div className='wrapper'>
        <div className='navigation-content flex items-center justify-between'>
          <div className='navigation-image'>
            <img
              className='block h-auto w-full md:max-w-full max-w-40'
              src='/images/exotic-logo.png'
              alt='logo'
            />
          </div>
          <div
            className={`navigation-items${
              menuOpen ? " navigation-items--opened" : ""
            }`}
            ref={menuRef}
          >
            <button
              className='close-sidebar md:hidden flex flex-col gap-1.5 w-fit-content'
              type='button'
              onClick={toggleMenuOpen}
            >
              <span className='block bg-black rounded h-[3px] w-[34px] rotate-[45deg] -translate-x-[3px] translate-y-[1px]'></span>
              <span className='block bg-black rounded h-[3px] w-[34px] -rotate-[45deg] -translate-x-[3px] -translate-y-[8px]'></span>
            </button>
            <ul>
              {navigationLinks.map(({ id, href, text }) => (
                <li key={id}>
                  <Link
                    className='navigation-link hover-underline-animation hover:text-gold md:py-3 py-1'
                    href={href}
                    onClick={handleLinkClick}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            className='open-sidebar md:hidden flex justify-center items-center flex-col gap-1.5'
            type='button'
            onClick={toggleMenuOpen}
          >
            <span className='block bg-black rounded h-[3px] w-[34px]'></span>
            <span className='block bg-black rounded h-[3px] w-[34px]'></span>
            <span className='block bg-black rounded h-[3px] w-[34px]'></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
