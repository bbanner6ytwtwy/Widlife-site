import React, { useState, useEffect } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from 'react-router-dom';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
    return(
        <>
        <nav className="flex py-5" style={{zIndex: 100}}>
          <Link to="/home" className="font-big inline-block w-6/12 ps-7 text-zinc-50 cursor-pointer font-serif font-bold">Wildlife</Link>
          {windowWidth < 1000?  <div className="w-6/12 my-auto">
           <div className="">
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={handleClick}
              width={30}
              height={20}
              strokeWidth={5}
              rotate={0}
              color='#CAFFFB'
              borderRadius={10}
              animationDuration={0.5}
              className=" relative ms-auto mr-7"
            />
            {isOpen && (
                <div className="absolute mt-4 w-4/12 text-center bgvd right-0 z-40">
                  <Link to="/home"  className="block  hover:bg-green-200 border-b-2 border-b-green-300 hover:text-stone-950 text-zinc-50">Home</Link>
                  <Link to="/blog"  className="block  hover:bg-green-200 border-b-2 border-b-green-300 hover:text-stone-950 text-zinc-50">Blog</Link>
                  <a href="#about" className="block hover:bg-green-200 border-b-2 border-b-green-300 hover:text-stone-950 text-zinc-50">About us</a>
                  <a href="#contact" className="block hover:bg-green-200 border-b-2 border-b-green-300 hover:text-stone-950 text-zinc-50">Contact us</a>
                </div> 
              )}
          </div> </div>:  <ul className="inline-block w-6/12 my-auto  text-end">
          <li className="inline-block text-2xl nlt align-middle px-3">
            <Link to="/home">Home</Link>
          </li>
          <li className="inline-block text-2xl nlt align-middle px-3">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="inline-block text-2xl nlt align-middle px-3">
             <a href="#about">About us</a>  
          </li>
          <li className="inline-block text-2xl nlt align-middle px-3 pr-7">
             <a href="#contact">Contact us</a> 
          </li>
        </ul>}
        </nav>
  
  </>
    )
}

export default Nav
